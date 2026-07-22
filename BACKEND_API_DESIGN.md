# Midhori Loop Backend API Design

This document defines the initial backend API for Midhori Loop, focusing on tracking recyclable materials, managing business onboarding, issuing certification, and supporting admin workflows.

## Architecture overview

- Frontend: React app served by Vite
- Backend: REST API (Node.js/Express or similar)
- Database: SQL or document database for businesses, materials, certifications, and partners
- Authentication: Role-based access for businesses and admins

## API resources

### 1. Businesses
  

  
- `POST /api/businesses` 
  - Create a new business signup request
  - Request body: `{ name, email, city, materialTypes, description }`
  - Response: `{ id, status, submittedAt }`

- `GET /api/businesses/{businessId}`
  - Retrieve business details and onboarding status

- `GET /api/businesses`
  - List businesses (admin only)

- `PATCH /api/businesses/{businessId}`
  - Update business profile or onboarding status
  - Request body: `{ status, approvedAt, assignedPartnerId }`

### 2. Partners / Recycling Units

- `POST /api/partners`
  - Add or onboard a recycling partner
  - Request body: `{ name, materialType, location, contactEmail }`

- `GET /api/partners`
  - List recycling units by material type or region

- `PATCH /api/partners/{partnerId}`
  - Update partner status or details

### 3. Material tracking

- `POST /api/shipments`
  - Create a new material shipment from a business
  - Request body: `{ businessId, partnerId, materialType, quantity, pickupDate, notes }`

- `GET /api/shipments`
  - Retrieve list of shipments with filters: status, businessId, partnerId

- `GET /api/shipments/{shipmentId}`
  - Get shipment detail and timeline events

- `PATCH /api/shipments/{shipmentId}`
  - Update shipment status or timeline
  - Request body: `{ status, eta, deliveredAt, trackingEvents }`

### 4. Tracking events

- `POST /api/shipments/{shipmentId}/events`
  - Add a status update event
  - Request body: `{ type, message, timestamp, location }`

- `GET /api/shipments/{shipmentId}/events`
  - List tracking events for a shipment

### 5. Certification

- `POST /api/certifications`
  - Issue certification after recycling is complete
  - Request body: `{ shipmentId, businessId, partnerId, materialType, quantity, certifiedAt, notes }`

- `GET /api/certifications`
  - List certifications for a business or partner

- `GET /api/certifications/{certificationId}`
  - Retrieve certification details and issued report

### 6. Carbon credits readiness

- `GET /api/reports/carbon-credits`
  - Generate carbon impact summary for a business
  - Query params: `businessId`, `fromDate`, `toDate`

- `POST /api/reports/carbon-credits/request`
  - Create a carbon credit readiness request or audit
  - Request body: `{ businessId, periodStart, periodEnd, materialSummary }`

## Authentication & roles

- Business user role
  - Create shipments
  - View own tracking status
  - Download certification

- Admin user role
  - Approve business signups
  - Manage recycling partners
  - Review shipments and certifications
  - Issue or revoke certifications

## Data model (simplified)

### Business

- `id`
- `name`
- `email`
- `city`
- `materialTypes`
- `status` (pending, approved, rejected)
- `createdAt`
- `approvedAt`

### Partner

- `id`
- `name`
- `materialType`
- `location`
- `contactEmail`
- `status`
- `createdAt`

### Shipment

- `id`
- `businessId`
- `partnerId`
- `materialType`
- `quantity`
- `pickupDate`
- `status`
- `eta`
- `deliveredAt`
- `createdAt`

### Certification

- `id`
- `shipmentId`
- `businessId`
- `partnerId`
- `materialType`
- `quantity`
- `certifiedAt`
- `notes`

## Recommended backend flow

1. Business submits signup request using `/api/businesses`
2. Admin reviews request in `/admin` and approves via `/api/businesses/{id}`
3. Business creates a shipment with `/api/shipments`
4. Partner updates shipment status with `/api/shipments/{id}`
5. Once delivered and processed, admin issues certification with `/api/certifications`
6. Business can request carbon credit readiness through `/api/reports/carbon-credits`

## Next MVP development steps

- Add authentication and protected routes
- Implement backend API with Node.js/Express or similar
- Persist data in a relational or document database
- Create admin UI actions for approvals and certifications
- Add B2C consumer pickup and drop-off scheduling
