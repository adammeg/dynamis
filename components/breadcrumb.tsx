import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center space-x-2 text-sm text-gray-400">
        <li>
          <Link
            href="/"
            className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            aria-label="Home"
          >
            <Home className="h-4 w-4" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-2 text-gray-600" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

