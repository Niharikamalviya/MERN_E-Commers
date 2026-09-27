const Stripe = require('../../config/stripe');
const User = require("../../models/user")


exports.payment = async (req, res) => {
    try {
        const { cartItems } = req.body

        console.log("cartItems", cartItems)

        const user = await User.findOne({ _id: req.userId })


        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_address_collection: 'auto',
            shipping_options: [
                {
                    shipping_rate: 'shr_1UKG0NQHCX6tH7xf6vvLRTA4'
                }
            ],

            customer_email: user.email,
            line_items: cartItems.map((item, index) => {
                return {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: item.productId.productName,
                            images: item.productId.productImage,
                            metadata: {
                                productId: item.productId._id
                            }

                        },
                        unit_amount: item.productId.sellingPrice

                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1
                    },
                    quantity: item.quantity

                }
            }),

            success_url: `${process.envFRONTEND_URL}/success`,
            cancel_url: `${process.envFRONTEND_URL}/cancel`
        }

        const session = await stripe.checkout.sessions.create(params)
        res.status(303).json(session)

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong in payment",
            error: error.message
        })


    }

}

