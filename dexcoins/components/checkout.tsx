/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/KJsmdaCNG0M
 */
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function checkout() {
  return (
    <div>
      <div />
      <div className="px-4 py-6 md:px-6">
        <div className="grid gap-6 md:gap-8 items-start md:grid-cols-3">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Tokens</h2>
            <div className="grid gap-4 sm:gap-6 md:gap-8">
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
                <div className="flex items-center space-x-4">
                  <img
                    alt="Token"
                    className="aspect-square object-cover rounded-lg"
                    height="80"
                    src="/placeholder.svg"
                    width="80"
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Basic Token</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="ml-auto flex items-center space-x-2">
                  <div className="text-2xl font-semibold">$50</div>
                  <Button size="sm">Add to cart</Button>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
                <div className="flex items-center space-x-4">
                  <img
                    alt="Token"
                    className="aspect-square object-cover rounded-lg"
                    height="80"
                    src="/placeholder.svg"
                    width="80"
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Premium Token</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div className="ml-auto flex items-center space-x-2">
                  <div className="text-2xl font-semibold">$100</div>
                  <Button size="sm">Add to cart</Button>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
                <div className="flex items-center space-x-4">
                  <img
                    alt="Token"
                    className="aspect-square object-cover rounded-lg"
                    height="80"
                    src="/placeholder.svg"
                    width="80"
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">VIP Token</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                  </div>
                </div>
                <div className="ml-auto flex items-center space-x-2">
                  <div className="text-2xl font-semibold">$200</div>
                  <Button size="sm">Add to cart</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 md:col-span-2">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">Cart</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">You have 3 items in your cart</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg">
              <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-800 last:border-0">
                <div className="flex items-center space-x-4">
                  <img
                    alt="Basic Token"
                    className="aspect-square object-cover rounded-lg"
                    height="80"
                    src="/placeholder.svg"
                    width="80"
                  />
                  <div className="space-y-1">
                    <h3 className="font-semibold">Basic Token</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="ml-auto flex items-center space-x-2">
                  <div className="text-sm font-medium">x1</div>
                  <div className="text-sm font-medium">$50</div>
                </div>
              </div>
              <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-800 last:border-0">
                <div className="flex items-center space-x-4">
                  <img
                    alt="Premium Token"
                    className="aspect-square object-cover rounded-lg"
                    height="80"
                    src="/placeholder.svg"
                    width="80"
                  />
                  <div className="space-y-1">
                    <h3 className="font-semibold">Premium Token</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div className="ml-auto flex items-center space-x-2">
                  <div className="text-sm font-medium">x1</div>
                  <div className="text-sm font-medium">$100</div>
                </div>
              </div>
              <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-800 last:border-0">
                <div className="flex items-center space-x-4">
                  <img
                    alt="VIP Token"
                    className="aspect-square object-cover rounded-lg"
                    height="80"
                    src="/placeholder.svg"
                    width="80"
                  />
                  <div className="space-y-1">
                    <h3 className="font-semibold">VIP Token</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                  </div>
                </div>
                <div className="ml-auto flex items-center space-x-2">
                  <div className="text-sm font-medium">x1</div>
                  <div className="text-sm font-medium">$200</div>
                </div>
              </div>
              <div className="flex items-center p-4">
                <div className="text-sm font-medium">Subtotal</div>
                <div className="ml-auto text-sm font-medium">$350</div>
              </div>
            </div>
            <div className="flex justify-end">
              <Link className="inline w-full md:w-auto" href="#">
                <Button className="w-full md:w-auto" variant="outline">
                  Continue Shopping
                </Button>
              </Link>
              <Link className="inline w-full md:w-auto" href="#">
                <Button className="w-full md:w-auto">Checkout</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
