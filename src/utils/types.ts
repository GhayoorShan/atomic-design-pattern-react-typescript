export interface PlanCardProps {
  title: string;
  description: string;
  price: string;
  buttonLabel: string;
  subDescription: string;
  onButtonClick: () => void;
  features: string[];
}
