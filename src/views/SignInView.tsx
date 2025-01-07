import { SignInForm } from "../components/SigInForm";
import { BenefitsRegister } from "../components/BenefitsRegister";
import { HeaderRegister } from "../components/HeaderRegister";

export const SignInView: React.FC = () => {
  return (
    <>
      <HeaderRegister />
      <SignInForm />
      <BenefitsRegister />
    </>
  );
};
