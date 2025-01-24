/**
 * Abstract user info class
 */
export abstract class userInfo {
    name: string;
    password: string;
    key?: string;
    address?: string;
    shopAddress?: string;
    contact_No?: string;
}

/**
 * Factory function to create a user based on role and user info
 */
const createUser = (role: string, userInfo: userInfo) => {
    // Initialize a user object with common properties
    const user = {
        name: userInfo.name,
        password: userInfo.password
    };

    // Define specific additional information based on the role
    const specificInfo = {
        admin: () => ({ role: 'Admin', key: userInfo.key }),
        customer: () => ({ role: 'Customer', address: userInfo.address }),
        seller: () => ({ role: 'Seller', shopAddress: userInfo.shopAddress, contact_No: userInfo.contact_No })
    };

    // Get additional information based on the role provided
    const additionalInfo = specificInfo[role] ? specificInfo[role]() : null;

    // If an invalid role was specified, throw an error
    if (!additionalInfo) {
        throw new Error('Invalid role specified.');
    }

    // Combine the common user properties with additional role-specific properties
    return { ...user, ...additionalInfo };
};

export default createUser;