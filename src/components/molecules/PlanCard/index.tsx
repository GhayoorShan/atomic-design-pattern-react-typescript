import React from "react";
import { PlanCardProps } from "../../../utils/types";
import CustomButton from "../../atom/button";

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  description,
  price,
  subDescription,
  buttonLabel,
  onButtonClick,
  features,
}) => {
  return (
    <div className=" flex flex-col gap-2  rounded-[24px] shadow-md w-full max-w-md bg-[#292929]">
      <div className="flex flex-col gap-4 py-6 px-8">
        <h2 className="text-[22px] font-extrabold ">{title}</h2>
        <p className=" text-[14px] font-normal ">{description}</p>
        <div className="flex items-center">
          <span className="text-[32px] font-extrabold pr-1">{price}</span>
          <span className="text-[14px] font-normal pt-1">/month</span>
        </div>
        <p className=" text-[14px] font-normal pb-2">{subDescription}</p>
        <CustomButton
          label={buttonLabel}
          padding="py-4 px-6"
          border={"border border-white"}
          onClick={onButtonClick}
        />
      </div>
      <div className="flex flex-col gap-4 bg-[#161616] p-8 rounded-[20px]">
        <ul className="list-disc ml-4 flex flex-col gap-2">
          {features.map((feature, index) => (
            <React.Fragment>
              <li className="opacity-75">{feature}</li>
              {index !== features.length - 1 && (
                <hr className="h-px my-2 bg-gray-200 border-0 opacity-20" />
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;
