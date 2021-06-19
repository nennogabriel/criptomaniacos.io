import Head from 'next/head';
import Image from 'next/image';
import { LayoutBase } from '../components';

export default function Home() {
  return [
    <Head>
      <title>
        Criptomaníacos - Bitcoin, Criptomoedas e Tecnologia Blockchain
      </title>
    </Head>,
    <LayoutBase>home</LayoutBase>,
  ];
}
