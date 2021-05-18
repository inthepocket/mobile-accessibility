declare type AppRoute = React.ComponentType<any> & {
  name: string;
  title: string;
  description: string;
  tooltip?: string;
};
