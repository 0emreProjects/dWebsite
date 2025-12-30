import * as React from "react";

type State = { error: Error | null };

export class ErrorBoundary extends React.Component<React.PropsWithChildren<Record<string, unknown>>, State> {
  constructor(props: React.PropsWithChildren<Record<string, unknown>>) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Unhandled error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-3xl w-full">
            <h1 className="text-2xl font-bold mb-4">An error occurred</h1>
            <pre className="whitespace-pre-wrap bg-surface/50 p-4 rounded-md overflow-auto border border-border">
              {String(this.state.error.stack || this.state.error.message)}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
