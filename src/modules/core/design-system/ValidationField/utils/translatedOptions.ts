export const translateOptions = (options: any, t: any) => {
  return options.map((opt: any) => ({
    ...opt,
    label: t(`${opt.label}`),
  }));
};
