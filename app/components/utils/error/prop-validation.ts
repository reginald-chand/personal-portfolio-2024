export const propValidator = ({
  prop,
  propName,
}: {
  prop: any;
  propName: string;
}) => {
  if (propName === undefined || propName === null || propName.length === 0) {
    throw new Error("Prop 'propName' is required!");
  }

  if (typeof propName !== "string") {
    throw new TypeError("Prop 'propName' must be of type string!");
  }

  if (prop === undefined || prop === null) {
    throw new Error(`Prop '${propName}' is required!`);
  }

  if (typeof prop === "string" && prop.length === 0) {
    throw new Error(`Prop '${propName}' is required!`);
  }
};
