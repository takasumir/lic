/* import { JSX } from "preact"; */
import file from "../static/pa/pa.json" with { type: "json" };

type Props = {
  asin: string;
};

type PaItem =
  | {
      ASIN: string;
      DetailPageURL: string;
      Images: {
        Primary: {
          Medium: {
            URL: string;
            Height: number;
            Width: number;
          };
        };
      };
      ItemInfo: {
        Title: {
          DisplayValue: string;
          Label: string;
          Locale: string;
        };
      };
      Offers?: {
        Listings?: Array<{
          Id: string;
          Price?: {
            Amount: number;
            Currency: string;
            DisplayAmount: string;
            Savings?: {
              Amount: number;
              Currency: string;
              DisplayAmount: string;
              Percentage: number;
            };
          };
          ViolatesMAP: boolean;
        }>;
      };
    }
  | undefined;

function Paitem(item: PaItem) {
  return (
    <div
      className="pa p-4 basis-80 w-80 border-4 rounded-xl border-[#1A237E]"
      data-asin={item?.ASIN}
    >
      <a
        href={item?.DetailPageURL}
        aria-label={item?.ItemInfo.Title.DisplayValue}
      >
        <img
          src={item?.Images.Primary.Medium.URL}
          width="160"
          height="160"
          className="mx-auto size-[160px] object-contain"
          loading="lazy"
        />
      </a>
      <div className="text-base font-bold truncate mb-2">
        {item?.ItemInfo.Title.DisplayValue}
      </div>
      <div className="text-center">
        <span className="price"></span>
        <a
          className="inline-block rounded-full ml-4 py-2 px-4 bg-[#1A237E] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 text-white font-bold no-underline"
          href={item?.DetailPageURL}
        >
          Amazonで見る
        </a>
      </div>
    </div>
  );
}

export function Pa(props: Props) {
  const asins = props.asin.split(":");

  const items: PaItem[] | undefined = file.filter((item) =>
    asins.includes(item.ASIN),
  );
  const itemsJsx = items.map((item) => Paitem(item));

  return (
    <>
      <div className="pa-container flex flex-wrap justify-around gap-4 min-h-[272px] my-4">
        {itemsJsx}
      </div>
    </>
  );
}
