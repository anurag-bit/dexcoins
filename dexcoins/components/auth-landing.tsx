/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/P1UoIiVQFbL
 */
import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function authLanding() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6 md:p-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <CardTitle>Register for Dexterix 4.0</CardTitle>
            <CardDescription>
              Dexterix 4.0 is the premier event token store. Register now to secure your spot.
            </CardDescription>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" placeholder="Enter your phone number" required type="tel" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="teamName">Team Name</Label>
            <Input id="teamName" placeholder="Enter your team name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="teamCode">Team Code</Label>
            <Input id="teamCode" placeholder="Enter your team code" required />
          </div>
          <div>
            <Button className="w-full" type="submit">
              Register
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
export default authLanding