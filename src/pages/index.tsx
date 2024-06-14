import { Fragment } from "react";
import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const query = trpc.iterable.useQuery(undefined, {
    enabled: false,
  });

  return (
    <div style={styles}>
      <div>
        <button onClick={() => query.refetch()}>Fetch</button>
        <br />
        <div>
          tRPC Iterable:
          {query.data?.length &&
            query.data?.map((chunk, index) => (
              <Fragment key={index}>{chunk}</Fragment>
            ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
