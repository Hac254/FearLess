import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Brain, Target, ListChecks, BarChart, Goal, BookOpen, AlertCircle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    title: "Daily Check-in 📝",
    description: "Track your symptoms and mood",
    icon: Brain,
    href: "/diary",
    color: "bg-primary/10",
    stats: "Last entry: 2 hours ago",
  },
  {
    title: "My Goals 🎯",
    description: "Set and track your progress",
    icon: Goal,
    href: "/goals",
    color: "bg-secondary/10",
    stats: "3 active goals",
  },
  {
    title: "Exposure Tasks 💪",
    description: "Practice your ERP exercises",
    icon: ListChecks,
    href: "/exposures",
    color: "bg-accent/10",
    stats: "Next task in 2 hours",
  },
  {
    title: "My Hierarchy 📊",
    description: "Build your exposure hierarchy",
    icon: Target,
    href: "/hierarchy",
    color: "bg-primary/10",
    stats: "8 items added",
  },
  {
    title: "Progress Tracker 📈",
    description: "View your improvement over time",
    icon: BarChart,
    href: "/progress",
    color: "bg-secondary/10",
    stats: "15% improvement this week",
  },
  {
    title: "Learn About OCD 📚",
    description: "Educational resources and tips",
    icon: BookOpen,
    href: "/learn",
    color: "bg-accent/10",
    stats: "5 articles available",
  },
]

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Welcome Back! 👋</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-[600px]">
          You're doing great! Let's continue working on managing your OCD together.
        </p>
      </div>

      {/* Quick Actions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Quick Actions ⚡</CardTitle>
          <CardDescription>Common tasks and activities you might want to do</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="w-full sm:w-auto">
              <Link href="/diary/new">Record Daily Check-in 📝</Link>
            </Button>
            <Button asChild variant="secondary" className="w-full sm:w-auto">
              <Link href="/exposures/new">Start Exposure Task 💪</Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/learn">Read Tips & Resources 📚</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Features Grid */}
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.href} className="relative group hover:shadow-lg transition-shadow">
            <CardHeader className={cn("rounded-t-lg", feature.color)}>
              <div className="flex items-center gap-2">
                <feature.icon className="h-5 w-5" />
                <CardTitle className="text-base sm:text-lg">{feature.title}</CardTitle>
              </div>
              <CardDescription className="text-sm">{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground mb-4">{feature.stats}</div>
              <Button asChild className="w-full group-hover:bg-primary/90">
                <Link href={feature.href} className="flex items-center justify-center gap-2">
                  Open
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Motivation Card */}
      <Card className="mt-8 bg-accent/10">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <p className="text-xl sm:text-2xl">🌟 Daily Inspiration</p>
            <p className="text-base sm:text-lg">
              "Small steps every day add up to big changes. You're making progress!"
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Warning Signs Card */}
      <Card className="mt-8 bg-primary/5">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-primary" />
            <CardTitle>Early Warning Signs Checker 🚨</CardTitle>
          </div>
          <CardDescription>Keep track of potential warning signs to stay on top of your progress</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild variant="outline" className="w-full">
            <Link href="/warning-signs">Check Warning Signs</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

