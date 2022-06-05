type LoaderProps = {
  src: string;
  width: number;
  height: number;
}

export const loader = ({ src, width, height }: any) => {
  return `${src}&w=${width}&h=${height}`
}