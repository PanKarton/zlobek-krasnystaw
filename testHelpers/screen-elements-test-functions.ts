import { screen } from 'testHelpers/test-utils';

export const testContactInfo = () => {
  screen.getAllByText(/123/i);
  screen.getAllByText(/test@test.pl/i);
  screen.getAllByText(/mon - fri/i);
  screen.getByText(/Hajduszoboszlo/i);
  screen.getByText(/testName/i);
  screen.getByText(/testStreet/i);
  screen.getAllByText(/testOpen/i);
  screen.getAllByText(/testClose/i);
};
export const testContactPage = () => {
  screen.getAllByText(/123/i);
  screen.getAllByText(/test@test.pl/i);
  screen.getAllByText(/mon - fri/i);
  screen.getAllByText(/Hajduszoboszlo/i);
  screen.getAllByText(/testName/i);
  screen.getAllByText(/testStreet/i);
  screen.getAllByText(/testOpen/i);
  screen.getAllByText(/testClose/i);
};

export const testLayette = () => {
  screen.getByText(/Test layette item one/i);
  screen.getByText(/Test layette item two/i);
  screen.getByText(/Test layette item three/i);
};
export const testSchedule = () => {
  screen.getByText(/6:00 - 8:00/i);
  screen.getByText(/przyjmowanie dzieci do żłobka/i);
  screen.getByText(/8:00 – 8:30/i);
  screen.getByText(/śniadanie/i);
  screen.getByText(/8:30 – 9:00/i);
  screen.getByText(/dowolne zabawy w grupie/i);
};
export const testFees = () => {
  screen.getByText(/test100/i);
  screen.getByText(/test7/i);
  screen.getByText(/test BS Krasnystaw/i);
  screen.getByText(/test 36 8200 0008 2001 0010 3567 0006/i);
};

export const testNewsPosts = async () => {
  expect(await screen.findByText(/Test title 1/i)).toBeInTheDocument();
  expect(await screen.findByText(/Test content 1/i)).toBeInTheDocument();
  expect(await screen.findByText(/Test title 2/i)).toBeInTheDocument();
  expect(await screen.findByText(/Test content 2/i)).toBeInTheDocument();
};
export const testNewsPostsWithLoadedPosts = async () => {
  expect(await screen.findByText(/Test title 1/i)).toBeInTheDocument();
  expect(await screen.findByText(/Test content 1/i)).toBeInTheDocument();
  expect(await screen.findByText(/Test title 2/i)).toBeInTheDocument();
  expect(await screen.findByText(/Test content 2/i)).toBeInTheDocument();
  expect(await screen.findByText(/Test title 3/i)).toBeInTheDocument();
  expect(await screen.findByText(/Test content 3/i)).toBeInTheDocument();
  expect(await screen.findByText(/Test title 4/i)).toBeInTheDocument();
  expect(await screen.findByText(/Test content 4/i)).toBeInTheDocument();
};

export const testGalleryGroupPage = () => {
  screen.getByText(/Test gorup name - galeria/);
  screen.getByText(/M.D. House - ciekawy serial/);
  screen.getByText(/wtorek, 10.01.2023/);
  screen.getByAltText(/test alt text/);
};

export const testGalleryFolderPage = () => {
  screen.getByText(/Test group name - Test folder name/);
  screen.getByText(/wtorek, 10.01.2023/);
  screen.getByAltText(/test alt 1/);
  screen.getByAltText(/test alt 2/);
};
