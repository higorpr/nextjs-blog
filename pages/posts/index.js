import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>First Post</h1>
			<h2>
				<Link href="/">Back to main page</Link>
			</h2>
			<Image src="/images/profile.jpg" height={144} width={144} />
		</Layout>
	);
}
