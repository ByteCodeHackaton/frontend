import {
  Box,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

const steps = [
  { title: "Не подтверждена" },
  { title: "В рассмотрении" },
  { title: "Принята" },
  { title: "Инспектор выехал" },
  { title: "Инспектор на месте" },
  { title: "Поездка" },
  { title: "Заявка закончена" },
  { title: "Выявление" },
  { title: "Отмена" },
  { title: "Отказ" },
  { title: "Пассажир опаздывает" },
  { title: "Инспектор опаздывает" },
];

export function OrderStepper() {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Stepper size="md" colorScheme="red" index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}
