// utils/helpers.ts

// Format a price value to display with currency symbol
export function formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }
  
  // Validate an email address format
  export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Calculate the total quantity of items in an order
//   export function calculateTotalQuantity(orderItems: OrderItem[]): number {
//     return orderItems.reduce((total, item) => total + item.quantity, 0);
//   }
  
  // Generate a unique order ID
  export function generateOrderID(): string {
    return `ORD-${Date.now()}`;
  }
  
  // Format a date string to a user-friendly format
  export function formatDateString(date: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(date).toLocaleDateString(undefined, options);
  }
  
  // Convert a string to title case
  export function toTitleCase(str: string): string {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
  }
  