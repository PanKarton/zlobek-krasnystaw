import { FallbackLoader } from 'Components/Atoms/FallbackLoader/FallbackLoader';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO, GET_NEWS_POSTS, GET_SINGLE_POST_BY_ID } from 'graphql/queries';
import { NewsPost } from 'modules/aktualności-post/NewsPost/NewsPost';
import { GetStaticPropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { NewsPostData, NewsPostResponse } from 'types/newsPostResponse';
import { NewsPostsListResponse } from 'types/newsPostsListResponse';
import { client } from '../../../graphql/apolloClient';

type PageProps = {
  contactInfo: ContactInfoDataAttributes;
  newsPost: NewsPostData;
};

const NewsArticle: NextPage<PageProps> = ({ contactInfo, newsPost }) => {
  const router = useRouter();

  if (router.isFallback) return <FallbackLoader />;

  return (
    <ContactDataProvider contactData={contactInfo}>
      <SecondaryTemplate heading={newsPost.attributes.tytul}>
        <NewsPost articleData={newsPost} />
      </SecondaryTemplate>
    </ContactDataProvider>
  );
};

export default NewsArticle;

export const getStaticPaths = async () => {
  const newsPostsRes = await client.query<NewsPostsListResponse>({
    query: GET_NEWS_POSTS,
  });

  const newsPosts = newsPostsRes.data.newsPosts.data;

  const newsPostsIds = newsPosts.map((post) => ({ params: { postId: post.id } }));

  return {
    paths: newsPostsIds,
    fallback: true,
  };
};

type Params = {
  postId: string;
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<Params>) => {
  if (!params) throw Error(`getStaticProps couldn't find params object`);

  const newsPostRes = await client.query<NewsPostResponse>({
    query: GET_SINGLE_POST_BY_ID,
    variables: {
      id: params.postId,
    },
  });

  const newsPost = newsPostRes.data.newsPost.data;

  const contactInfoRes = await client.query<ContactInfoResponse>({
    query: GET_CONTACT_INFO,
  });

  const contactInfo = contactInfoRes.data.contactInfo.data.attributes;

  if (!newsPost || !contactInfo)
    return {
      notFound: true,
    };

  return {
    props: {
      contactInfo,
      newsPost,
    },
  };
};
