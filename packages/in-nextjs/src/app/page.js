import Image from "next/image";
import shibuya from "../../assets/example-image.jpg";

export default function Home() {
  return (
    <main>
      <h1>Hello Next.js!</h1>
      <Image
        src={shibuya}
        alt="shibuya"
        placeholder="blur"
        loading="lazy"
        height={400}
      />
    </main>
  );
}
