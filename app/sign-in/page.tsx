import Link from "next/link";
import { AlertTriangle, Info } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SignInPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md items-center px-4 py-10">
      <Card className="w-full space-y-5">
        <div className="space-y-2">
          <Badge variant="warning" className="w-fit">
            Development-only authentication state
          </Badge>
          <CardTitle>Sign in to VIT Connect</CardTitle>
          <CardDescription>
            This form is a UI prototype only. Credentials are not validated against production systems.
          </CardDescription>
        </div>

        <form className="space-y-4" aria-label="Prototype sign in form">
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-medium text-text-primary">
              VIT email
            </label>
            <Input id="email" type="email" placeholder="name@vit.edu" autoComplete="email" />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="password" className="text-sm font-medium text-text-primary">
              Password
            </label>
            <Input id="password" type="password" placeholder="••••••••" autoComplete="current-password" />
          </div>

          <Button type="submit" className="w-full" aria-describedby="signin-note">
            Continue (prototype)
          </Button>
          <p id="signin-note" className="text-xs text-text-muted">
            Submitting this form does not create a real authenticated session in Milestone 1.
          </p>
        </form>

        <section aria-labelledby="auth-state-heading" className="space-y-3 rounded-lg border border-border-subtle bg-slate-50 p-3">
          <h2 id="auth-state-heading" className="text-sm font-semibold">
            Prototype state examples
          </h2>
          <div className="flex items-start gap-2 text-sm text-text-secondary">
            <Info aria-hidden size={16} className="mt-0.5" />
            <p>Loading state: verifying sign-in request...</p>
          </div>
          <div className="flex items-start gap-2 text-sm text-amber-700">
            <AlertTriangle aria-hidden size={16} className="mt-0.5" />
            <p>Error state: authentication service is not configured yet.</p>
          </div>
        </section>

        <div className="text-sm text-text-secondary">
          <Link href="/" className="font-medium text-accent hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35">
            Back to landing page
          </Link>
        </div>
      </Card>
    </main>
  );
}
