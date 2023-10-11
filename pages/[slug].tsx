import fm from "front-matter";
import { readFileSync, readdirSync } from "fs";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { resolve } from "path";

// props passed from build-time in getStaticProps to the page for rendering
interface Props {
  slug: string;
  fileContent: string;
}

// the page (what is rendered onto the page)
export default function Page(props: Props) {
  const { body, attributes } = fm(props.fileContent) as any; // decode file (split out the "frontmatter" and "body")

  return (
    <div key={attributes.title}>
      <h1>{attributes.title}</h1>

      {attributes.sections.map((section: any, i) => {
        if (section.type == "carousel") {
          return <div key={i} className="text-blue-400">{section.header}</div>
        }
        if (section.type == "spotlight") {
          return <div key={i} className="text-blue-400 bg-gray-700">{section.text}</div>
        }
        return <div key={i}>
          <pre>{JSON.stringify(section, null, 4)}</pre>
        </div>
      })}
    </div>
  );
}

// get data for a page from the file system
export function getStaticProps({
  params,
}: GetStaticPropsContext): GetStaticPropsResult<Props> {
  const slug = params!.slug as string;

  const fileContent = readFileSync(
    resolve("content", "pages", slug + ".md"),
    "utf-8"
  ); // read file content from file system

  return { props: { slug, fileContent } }; // pass props to the page itself
}

// tells nextjs what pages should exist, based on the files created by decap
export function getStaticPaths(): GetStaticPathsResult {
  const filenames = readdirSync(resolve("content", "pages"), "utf-8"); // fetch the names of files in directory _posts/blog
  const paths = filenames
    .filter((p) => p.endsWith(".md")) // only markdown files (end in .md)
    .map((p) => p.substring(0, p.length - 3)) // get rid of the .md extension
    .map((slug) => ({ params: { slug } })); // turn the filename w/o extension into path params for nextjs
  return {
    paths,
    fallback: false,
  };
}
