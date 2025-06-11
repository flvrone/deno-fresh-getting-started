import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return(<>
   <p>Hello {props.params.name}</p>
   <p>URL: {props.url.toString()}</p>
   <p>Route: {props.route}</p>
   <p>Props: <i>{Object.keys(props).join(", ")}</i></p>
  </>);
}
