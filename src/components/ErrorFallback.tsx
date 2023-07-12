export default function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="alert alert-danger alert-dismissible fade show">
      <h4 className="alert-heading"><i className="bi-exclamation-octagon-fill"></i> Oops! Something went wrong.</h4>
      <pre>{error.message}</pre>
      <pre>{error.stack}</pre>
    </div>
  )
}

