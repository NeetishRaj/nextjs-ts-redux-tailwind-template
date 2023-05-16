import RootLayout from '@/components/layout'
import Image from 'next/image'

export default function Home() {
  return (
    <RootLayout>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        Main content
      </div>
    </RootLayout>
  )
}
