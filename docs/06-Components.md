# Inzane's Food UI Components
Version: 1.0

---

# Overview

This document defines all reusable UI components used throughout the website.

Every component should be reusable, responsive, accessible, and consistent with the Design System.

The project should follow an Atomic Design approach:

Atoms → Molecules → Organisms → Sections → Pages

All components should be built once and reused throughout the project.

---

# Global Components

These components appear throughout the website.

Navbar

Footer

Primary Button

Secondary Button

Ghost Button

Section Header

Breadcrumb

Floating AI Button

Back To Top Button

Loading Spinner

Toast Notification

Modal

Divider

Badge

Chip

Tag

---

# Navigation

Component Name

Navbar

Purpose

Provide primary website navigation.

Desktop Layout

Logo

Navigation Links

Order Now Button

Mobile Layout

Logo

Hamburger Menu

Slide-out Drawer

Features

Sticky Navigation

Transparent over Hero

White background after scrolling

Active Page Indicator

Smooth Animation

Responsive

---

# Logo Component

Purpose

Display official brand identity.

Available Variants

Primary Logo

Alternate Logo

Social Logo

Favicon

Rules

Always maintain aspect ratio.

Never stretch.

Never recolor.

Always use transparent PNG.

---

# Hero Section

Purpose

Create a premium first impression.

Layout

Desktop

Left Content

Right Image

Mobile

Image on top

Content below

Contains

Headline

Description

Primary CTA

Secondary CTA

Hero Image

Hero Highlights

Background Pattern

---

# Primary Button

Background

Dark Forest Green

Text

White

Radius

16px

Padding

16 x 32

Hover

Gold

Transition

300ms

---

# Secondary Button

Background

White

Border

Dark Green

Hover

Dark Green

Text

White

---

# Food Card

Purpose

Display a menu item.

Contains

Food Image

Food Name

Description

Price

Popular Badge

Preparation Time

Order Button

Hover Animation

Responsive

Rounded Image

---

# Featured Food Card

Used on Homepage.

Larger than standard card.

Includes

Large Image

Short Story

Price

Order Button

Popular Badge

---

# Category Card

Purpose

Navigate to menu categories.

Contains

Category Icon

Category Name

Short Description

Hover Animation

Clickable

---

# Menu Filter

Purpose

Filter menu by category.

Display

Horizontal Scroll on Mobile

Tabs on Desktop

Categories

All

Appetizers

Dimsum

Siopao

Noodles

Fried Rice

Milk Tea

Desserts

---

# Gallery Card

Contains

Food Image

Image Title

Category

Lightbox Preview

Hover Zoom

---

# Testimonial Card

Contains

Customer Avatar

Customer Name

Five Star Rating

Review

Date

Rounded Card

---

# Reservation Form

Fields

Name

Phone

Email

Guests

Date

Time

Special Request

Submit Button

Validation

Required Fields

Inline Error Messages

Success Message

---

# Contact Form

Fields

Name

Email

Phone

Message

Submit Button

Validation

Responsive

---

# Business Hours Card

Contains

Opening Hours

Today's Status

Location

Phone

Map Button

---

# Location Card

Contains

Embedded Google Map

Address

Directions Button

Parking Information

---

# AI Chat Widget

Purpose

Provide AI assistance.

Location

Bottom Right

Features

Answer FAQs

Recommend Menu Items

Help Place Orders

Reservation Assistance

Escalate to Human Staff

Status Indicator

Online

Offline

Typing Animation

---

# Shopping Cart

Purpose

Manage customer orders.

Contains

Product List

Quantity Controls

Remove Item

Subtotal

Checkout Button

Continue Shopping

Promo Code

---

# Checkout

Fields

Customer Information

Delivery Address

Payment Method

Order Summary

Place Order

Confirmation

---

# Order Success Modal

Displays

Order Number

Estimated Preparation Time

Pickup or Delivery Details

Order Summary

Return Home Button

Track Order Button

---

# FAQ Accordion

Contains

Question

Answer

Expandable

Smooth Animation

---

# Newsletter Card

Contains

Email Field

Subscribe Button

Privacy Note

Success Message

---

# CTA Banner

Large Promotional Section

Contains

Headline

Description

Primary Button

Background Image

---

# Social Media Links

Platforms

Facebook

Instagram

TikTok

Messenger

Rules

Open in New Tab

Official Brand Colors

Hover Animation

---

# Footer

Sections

Logo

Quick Links

Menu Categories

Business Hours

Contact Information

Social Media

Newsletter

Copyright

---

# Empty State

Cart Empty

No Search Results

No Reservations

No Gallery Images

Each should include

Illustration

Message

Action Button

---

# Loading State

Skeleton Cards

Loading Spinner

Image Placeholder

Animated Shimmer

---

# Error State

Friendly Message

Retry Button

Return Home Button

---

# Notification Toasts

Success

Error

Warning

Information

Display

Top Right

Disappear after 4 seconds

---

# Mobile Bottom Navigation

Tabs

Home

Menu

Order

Reservations

Profile

---

# Accessibility Requirements

Keyboard Navigation

ARIA Labels

Screen Reader Support

Visible Focus State

Touch Friendly

Minimum 44px Touch Targets

---

# Animation Rules

Duration

300ms

Use

Fade

Slide

Scale

Hover Lift

Smooth Scroll

Avoid excessive animations.

---

# Responsive Behavior

Desktop

1440px+

Laptop

1024px+

Tablet

768px+

Mobile

390px+

Every component must be fully responsive.

---

# Component Folder Structure

/components

/ui

/layout

/navigation

/menu

/gallery

/forms

/cart

/checkout

/reservation

/contact

/ai

/footer

Each component should have its own folder with:

Component.tsx

Component.module.css (if needed)

index.ts

---

# Future Components

Customer Dashboard

Restaurant Dashboard

Loyalty Card

Rewards Widget

Promo Banner

Inventory Alert

Analytics Cards

Sales Charts

Kitchen Display

Driver Tracker

QR Ordering

AI Voice Ordering

AI Waiter

These should be designed to integrate seamlessly with the existing design system in future versions.

---

End of Components