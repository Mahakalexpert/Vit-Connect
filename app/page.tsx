import Link from "next/link";
import { ArrowRight, GraduationCap, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const highlightedAreas = [
  "Announcements and notices",
  "Academic resources",
  "Forum collaboration",
  "Role-aware moderation",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-page">
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 md:px-6 md:py-12">
        <section className="rounded-2xl border border-border-subtle bg-surface p-6 shadow-card md:p-10">
          <div className="mb-4 flex items-center gap-3">
            <GraduationCap className="text-accent" aria-hidden size={22} />
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
              VIT Pune Campus Hub - Foundation Build
            </h1>
          </div>
          <p className="max-w-3xl text-sm leading-6 text-text-secondary md:text-base">
            This milestone ships a reusable UI foundation and an application shell prototype. It intentionally uses development-only sample content and does not claim production authentication or live institutional integrations.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/sign-in" className="gap-2">
                Sign in prototype
                <ArrowRight size={14} aria-hidden />
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/app/dashboard">Open authenticated shell</Link>
            </Button>
            <Badge variant="warning" className="self-center">
              Development-only states
            </Badge>
          </div>
        </section>

        <section aria-labelledby="scope-heading">
          <h2 id="scope-heading" className="mb-3 text-lg font-semibold text-text-primary">
            Included in Milestone 1
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {highlightedAreas.map((area) => (
              <Card key={area}>
                <CardTitle>{area}</CardTitle>
                <CardDescription>
                  Foundation component and interaction patterns are prepared for this module.
                </CardDescription>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <Card className="border-accent/30 bg-accent-soft/35">
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck size={16} aria-hidden />
              Security boundary note
            </CardTitle>
            <CardDescription>
              Role checks, database policies, and provider authentication flows are planned but not implemented in this milestone.
            </CardDescription>
          </Card>
        </section>
      </main>
    </div>
  );
}
