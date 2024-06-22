function Error<T>(props: T) {
  if (props.err !== null) return <div>Error hai</div>;
  else return <div>Nahi hai error</div>;
}
export default Error;
