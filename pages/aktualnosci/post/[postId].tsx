import { ApolloClient, InMemoryCache } from '@apollo/client';
import { FallbackLoader } from 'Components/Atoms/FallbackLoader/FallbackLoader';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO, GET_NEWS_POSTS, GET_SINGLE_POST_BY_ID } from 'graphql/queries';
import { getEnvVariable } from 'helpers/getEnvVariable';
import { NewsPost } from 'modules/aktualności-post/NewsPost/NewsPost';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfo } from 'types/contactData';
import { Post } from 'types/newsPosts';

type Props = {
  contactInfo: ContactInfo;
  newsPost: Post;
};

const NewsArticle = ({ contactInfo, newsPost }: Props) => {
  const router = useRouter();

  if (router.isFallback) return <FallbackLoader />;

  return (
    <ContactDataProvider contactData={contactInfo}>
      <SecondaryTemplate heading={newsPost.attributes.title}>
        <NewsPost articleData={newsPost} />
      </SecondaryTemplate>
    </ContactDataProvider>
  );
};

export default NewsArticle;

export const getStaticPaths: GetStaticPaths = async () => {
  const client = new ApolloClient({
    uri: getEnvVariable(process.env.NEXT_PUBLIC_STRAPI_URL),
    cache: new InMemoryCache(),
  });

  const newsPostsRes = await client.query({
    query: GET_NEWS_POSTS,
  });

  const newsPosts = newsPostsRes.data.newsPosts.data;

  const newsPostsIds = newsPosts.map((post: Post) => ({ params: { postId: post.id } }));

  return {
    paths: newsPostsIds,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) throw Error(`getStaticProps couldn't find params object`);

  const client = new ApolloClient({
    uri: getEnvVariable(process.env.NEXT_PUBLIC_STRAPI_URL),
    cache: new InMemoryCache(),
  });

  const newsPostRes = await client.query({
    query: GET_SINGLE_POST_BY_ID,
    variables: {
      id: params.postId,
    },
  });

  const newsPost = newsPostRes.data.newsPost.data;

  const contactInfoRes = await client.query({
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
