export function shipment(order) {
    const amount = order.basic;

    if (amount < 100.00) {
        return 20.00
    } else if (amount >= 100.00 && amount < 200.00) {
        return 12.00
    } else {
        return 0.00
    }
}