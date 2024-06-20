import React from "react";
import {
  MonthlyBasicPlanFeatures,
  MonthlyEnterprisePlanFeatures,
  MonthlyGrowthPlanFeatures,
  MonthlyPlanPages,
} from "../../../utils/const";
import Menu from "../../../components/organism/Menu/Menu";
import CustomButton from "../../../components/atom/button";
import PlanCard from "../../../components/molecules/PlanCard";

const MonthlyPlan: React.FC = () => {
  return (
    <>
      <div className="flex flex-row gap-4">
        <CustomButton
          label="Start with free tier"
          backgroundColor="bg-white"
          textColor="text-black"
          padding="py-3 px-6"
          onClick={() => {}}
        />
        <div>
          <Menu pages={MonthlyPlanPages} isDashboardPage={false} />
        </div>
        <CustomButton
          label="Contact for Custom Plan"
          backgroundColor="bg-white"
          textColor="text-black"
          padding="py-3 px-6"
          onClick={() => {}}
        />
      </div>
      <hr className="h-px w-4/5 my-4 bg-gray-200 border-0 opacity-20" />

      {/* if data is from api we can map it to one PlanCard */}
      <div className="flex flex-row gap-4">
        <PlanCard
          title="Starter Plan"
          description="For individuals and small teams beginning to explore the capabilities of GPT-4 for various projects."
          price="$400"
          buttonLabel="Choose Plan"
          subDescription="including GPT-4's versatility for standard and visual tasks."
          onButtonClick={() => {}}
          features={MonthlyBasicPlanFeatures}
        />
        <PlanCard
          title="Growth Plan"
          description="For individuals and small teams beginning to explore the capabilities of GPT-4 for various projects."
          price="$2,700"
          buttonLabel="Choose Plan"
          subDescription="including GPT-4's versatility for standard and visual tasks."
          onButtonClick={() => {}}
          features={MonthlyGrowthPlanFeatures}
        />
        <PlanCard
          title="Enterprise Plan"
          description="For individuals and small teams beginning to explore the capabilities of GPT-4 for various projects."
          price="$3,400"
          buttonLabel="Choose Plan"
          subDescription="including GPT-4's versatility for standard and visual tasks."
          onButtonClick={() => {}}
          features={MonthlyEnterprisePlanFeatures}
        />
      </div>
    </>
  );
};

export default MonthlyPlan;
