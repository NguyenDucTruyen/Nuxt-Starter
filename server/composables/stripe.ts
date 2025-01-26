import Stripe from 'stripe'

const stripeAdmin = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function createCheckoutSession(email: string) {
  const session = await stripeAdmin.checkout.sessions.create({
    line_items: [
      {
        price: process.env.STRIPE_PRICE_ID as string,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NUXT_PUBLIC_APP_BASE_URL}/stripe/success?sessionId={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NUXT_PUBLIC_APP_BASE_URL}/stripe/cancel`,
    customer_email: email,
  })
  return session
}

export async function retrieveCheckoutSession(sessionId: string) {
  const session = await stripeAdmin.checkout.sessions.retrieve(sessionId)
  return session
}
