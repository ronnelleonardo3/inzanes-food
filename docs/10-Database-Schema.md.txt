# Inzane's Food Database Schema
Version: 1.0

---

# Overview

This document defines the data model for the Inzane's Food platform.

The schema is designed to support:

- Restaurant Website
- Online Ordering
- Reservations
- AI Assistant
- CRM
- Loyalty Program
- Admin Dashboard
- Inventory
- Future Mobile App

The database should be scalable and normalized.

---

# Table: categories

Purpose

Store menu categories.

Fields

id (UUID)

name

slug

description

display_order

icon

is_active

created_at

updated_at

---

# Table: menu_items

Purpose

Store all food and beverage items.

Fields

id (UUID)

category_id

name

slug

short_description

description

price

image_url

preparation_time

is_featured

is_popular

is_available

display_order

created_at

updated_at

---

# Table: menu_sizes

Purpose

Support different sizes such as Milk Tea.

Fields

id

menu_item_id

size_name

price

display_order

created_at

updated_at

---

# Table: customers

Purpose

Store customer profiles.

Fields

id

first_name

last_name

phone

email

birthday

loyalty_points

preferred_language

marketing_opt_in

created_at

updated_at

---

# Table: customer_addresses

Purpose

Store delivery addresses.

Fields

id

customer_id

label

address_line

city

province

postal_code

notes

latitude

longitude

is_default

created_at

updated_at

---

# Table: reservations

Purpose

Restaurant reservations.

Fields

id

customer_id

reservation_date

reservation_time

guest_count

special_request

status

confirmation_code

created_at

updated_at

---

Status Values

Pending

Confirmed

Cancelled

Completed

No Show

---

# Table: orders

Purpose

Store customer orders.

Fields

id

customer_id

order_number

order_type

status

subtotal

discount

delivery_fee

total

payment_method

payment_status

notes

created_at

updated_at

---

Order Types

Pickup

Delivery

Dine In

---

Order Status

Pending

Confirmed

Preparing

Ready

Completed

Cancelled

---

Payment Status

Pending

Paid

Refunded

Failed

---

# Table: order_items

Purpose

Individual items inside an order.

Fields

id

order_id

menu_item_id

size_id

quantity

unit_price

subtotal

special_instruction

created_at

updated_at

---

# Table: payments

Purpose

Track payment information.

Fields

id

order_id

payment_provider

transaction_reference

amount

status

paid_at

created_at

updated_at

---

# Table: reviews

Purpose

Customer reviews.

Fields

id

customer_id

order_id

rating

comment

is_featured

created_at

updated_at

---

# Table: promotions

Purpose

Restaurant promotions.

Fields

id

title

description

discount_type

discount_value

start_date

end_date

is_active

created_at

updated_at

---

# Table: coupons

Purpose

Discount coupons.

Fields

id

code

description

discount_type

discount_value

usage_limit

expires_at

is_active

created_at

updated_at

---

# Table: loyalty_transactions

Purpose

Track loyalty point changes.

Fields

id

customer_id

points

transaction_type

reference

created_at

---

# Table: newsletter_subscribers

Purpose

Marketing subscribers.

Fields

id

email

status

subscribed_at

---

# Table: contact_messages

Purpose

Website contact form.

Fields

id

name

email

phone

subject

message

status

created_at

---

# Table: ai_conversations

Purpose

Store AI chat history.

Fields

id

customer_id

session_id

channel

user_message

assistant_response

intent

created_at

---

# Table: notifications

Purpose

Customer notifications.

Fields

id

customer_id

title

message

channel

status

sent_at

created_at

---

# Table: business_settings

Purpose

Restaurant configuration.

Fields

id

business_name

phone

email

address

opening_hours

reservation_enabled

ordering_enabled

currency

timezone

updated_at

---

# Table: staff_users

Purpose

Restaurant staff accounts.

Fields

id

name

email

role

status

last_login

created_at

updated_at

---

Roles

Admin

Manager

Cashier

Kitchen

Customer Support

---

# Relationships

Category

↓

Menu Items

↓

Order Items

↓

Orders

↓

Customers

Customers

↓

Reservations

Customers

↓

Reviews

Customers

↓

AI Conversations

Orders

↓

Payments

Orders

↓

Reviews

---

# Future Tables

inventory_items

inventory_transactions

kitchen_queue

delivery_drivers

gift_cards

branches

suppliers

purchase_orders

expenses

sales_reports

employee_schedule

---

# Naming Rules

Use snake_case.

Use UUID primary keys.

Store timestamps in UTC.

Use foreign keys for relationships.

Soft delete where appropriate.

Avoid duplicate data.

---

# Security

Never store plain text passwords.

Encrypt sensitive customer information.

Use row-level security when supported.

Restrict administrative access.

Audit important actions.

---

End of Database Schema