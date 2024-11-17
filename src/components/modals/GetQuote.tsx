'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "src/hooks/use-toast"

export default function GetQuoteModal() {
  const [open, setOpen] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Here you would typically send the form data to your server
    // For this example, we'll just show a success message
    toast({
      title: "Quote Request Submitted",
      description: "We'll get back to you with a quote soon!",
    })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='bg-sky-500  hover:bg-sky-600  rounded-lg'>Get Quote</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request a Quote</DialogTitle>
          <DialogDescription>
            Fill out this form and we'll get back to you with a custom quote for your project.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your full name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your email address" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" placeholder="Your company name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="project">Project Details</Label>
            <Textarea
              id="project"
              placeholder="Tell us about your project and your goals"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-sky-500  hover:bg-sky-600  rounded-lg">Submit Request</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}