type Props = {
  url: string;
  image: string;
  alt: string;
  title: string;
  description: string;
};

export function Linkcard(props: Props) {
  return (
    <a href={props.url} aria-label={props.title}>
      <div class="flex items-center p-4 my-6 gap-x-4 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
        <img
          src={props.image}
          alt={props.alt}
          loading="lazy"
          class="relative inline-block h-24 w-24 rounded-full object-cover object-center"
        />
        <div>
          <h6 class="font-bold text-slate-800 font-semibold line-clamp-2">
            {props.title}
          </h6>
          <p class="mx-auto mt-2 line-clamp-2">{props.description}</p>
        </div>
      </div>
    </a>
  );
}
