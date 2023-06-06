import Link from "next/link";

const links = [
  {title: "index", url: "/"},
  {title: "index2", url: "/index2/"},
  {title: "timer", url: "/timer/"},
  {title: "text", url: "/text/"},
]

export const Links = () => {
  return (
    <>
      <h1>Links</h1>
      {links.map((item) => (
        <p key={item.url}>
          <Link href={item.url}>{item.title}</Link>
        </p>
      ))}
    </>
  );
}
