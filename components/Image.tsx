import { parse } from "jsr:@std/path";

type Props = {
  src: string;
  alt: string;
  width: string;
  height: string;
};

export function Image(props: Props) {
  const { dir, ext, name } = parse(props.src);
  const sizes = ["640", "960", "1280"];
  const srcset = sizes.reduce(
    (acc, cur) => dir + "/" + name + "s" + cur + ext + " " + cur + "w, " + acc,
    "",
  );
  const src = dir + "/" + name + "s" + sizes[0] + ext;
  console.log(src);

  return (
    <img
      srcset={srcset}
      src={src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      loading="lazy"
      class="mx-auto my-4"
    />
  );
}
