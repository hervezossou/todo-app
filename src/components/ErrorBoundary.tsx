import { ReactNode } from "react"
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary"

interface Props {
    children: ReactNode
}

const ErrorFallback = () => {
    return (
        <div 
            className="flex flex-col items-center justify-center h-screen text-red-500" 
            role="alert"
        >
            <h1 className="text-2xl font-bold">Oups ! Something went wrong</h1>
            <p>Try to reload the page.</p>
        </div>
    )
}

export default function ErrorBoundary({children}: Props) {
    return (
        <ReactErrorBoundary
            FallbackComponent={ErrorFallback}
        >
            {children}
        </ReactErrorBoundary>
    )
}