import { cn } from "@/lib/utils";

interface InfoListProps {
  title: string;
  text_1_left: string;
  text_1_right: string;
  text_2_left: string;
  text_2_right: string;
  text_3_left?: string;
  text_3_right?: string;
  text_4_left?: string;
  text_4_right?: string;
  text_5_left?: string;
  text_5_right?: string;
  text_6_left?: string;
  text_6_right?: string;
  text_right_size?: string;
  containerClassName?: string;
  text_left_size?: string;
  titleClass?: string;
}

const InfoList: React.FC<InfoListProps> = ({
  title,
  text_1_left,
  text_1_right,
  text_2_left,
  text_2_right,
  text_3_left,
  text_3_right,
  text_4_left,
  text_4_right,
  text_5_left,
  text_5_right,
  text_6_left,
  text_6_right,
  text_right_size,
  containerClassName,
  text_left_size,
  titleClass,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:justify-between text-black mt-16 md:mt-24 lg:mt-32",
        containerClassName
      )}>
      <span className={cn("text-lg", titleClass)}>{title}</span>
      <ul className="md:w-2/3 lg:w-7/12 mt-4 md:mt-0">
        <li className="flex flex-col md:flex-row md:justify-between gap-y-2 border-b border-[#cfd1d7] pb-7">
          <p className={cn("text-base lg:text-[1.3em]", text_left_size)}>{text_1_left}</p>
          <span className={cn("md:max-w-[41.6%]", text_right_size)}>{text_1_right}</span>
        </li>
        <li className="flex flex-col md:flex-row md:justify-between gap-y-2 border-b border-[#cfd1d7] py-7">
          <p className={cn("text-base lg:text-[1.3em]", text_left_size)}>{text_2_left}</p>
          <span className={cn("md:max-w-[41.6%]", text_right_size)}>{text_2_right}</span>
        </li>
        {text_3_left && (
          <li className="flex flex-col md:flex-row md:justify-between gap-y-2 border-b border-[#cfd1d7] py-7">
            <p className={cn("text-base lg:text-[1.3em]", text_left_size)}>{text_3_left}</p>
            <span className={cn("md:max-w-[41.6%]", text_right_size)}>{text_3_right}</span>
          </li>
        )}
        {text_4_left && (
          <li className="flex flex-col md:flex-row md:justify-between gap-y-2 border-b border-[#cfd1d7] py-7">
            <p className={cn("text-base lg:text-[1.3em]", text_left_size)}>{text_4_left}</p>
            <span className={cn("md:max-w-[41.6%]", text_right_size)}>{text_4_right}</span>
          </li>
        )}
        {text_5_left && (
          <li className="flex flex-col md:flex-row md:justify-between gap-y-2 border-b border-[#cfd1d7] py-7">
            <p className={cn("text-base lg:text-[1.3em]", text_left_size)}>{text_5_left}</p>
            <span className={cn("md:max-w-[41.6%]", text_right_size)}>{text_5_right}</span>
          </li>
        )}
        {text_6_left && (
          <li className="flex flex-col md:flex-row md:justify-between gap-y-2 border-b border-[#cfd1d7] py-7">
            <p className={cn("text-base lg:text-[1.3em]", text_left_size)}>{text_6_left}</p>
            <span className={cn("md:max-w-[41.6%]", text_right_size)}>{text_6_right}</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default InfoList;
