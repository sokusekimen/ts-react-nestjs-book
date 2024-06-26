import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

type SSRProps = {
  message: string;
};

const SSR: NextPage<SSRProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>Sserve Side Rendering</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページはサーバーサイドレンダリングによってアクセス時にサーバーで描画されたページです。
        </p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp} にこのページのgetServerSidePropsが実行されました`;
  // console.log('getServerSideProps', context.req);
  // console.log('getServerSideProps', context.res);
  console.log('getServerSideProps', context.resolvedUrl);
  console.log('getServerSideProps', context.query);

  return {
    props: {
      message
    }
  }
}

export default SSR