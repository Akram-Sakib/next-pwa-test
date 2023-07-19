import Image from "next/image";
import { Inter } from "next/font/google";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { getLocale } from "@/utils/getLocale";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const t = useTranslations();

  return (
    <>
      <p>{t("W_BANNER_HEAD")}</p>
      <LocaleSwitcher />
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {

  const messages = await getLocale(locale);

  return {
    props: {
      messages: messages,
    },
  };
}
