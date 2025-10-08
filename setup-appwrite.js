// Setup script to create Appwrite database and collection
// Run this with: node setup-appwrite.js

const { Client, Databases, ID, Permission, Role } = require('node-appwrite');

// Initialize the Appwrite client
const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68e642d0002726945940')
    .setKey('standard_8e6b01412f81aa800a6125ea01c3de8ce10ae648d835d10d4f29982949dba61bbf4f76755e10a1df73f1884d0ab259bf76f9eb931d783782dde7741f402569a5480763d6977a44e34e60c6c385aacfad560189500af55265cf5d084457e9ce5aabc340554982ebfde158a46bdcbdbe78a5b34085fda411443625bdc5068dd807');

const databases = new Databases(client);

async function setupAppwrite() {
    try {
        console.log('🚀 Setting up Appwrite database and collection...');

        // Create database
        console.log('📄 Creating database...');
        const database = await databases.create(
            'ritam-bharat-db',
            'Ritam Bharat Database'
        );
        console.log('✅ Database created:', database.name);

        // Create contacts collection
        console.log('📋 Creating contacts collection...');
        const collection = await databases.createCollection(
            'ritam-bharat-db',
            'contacts',
            'Contact Form Submissions',
            [
                Permission.create(Role.any()),
                Permission.read(Role.any()),
                Permission.update(Role.any()),
                Permission.delete(Role.any())
            ]
        );
        console.log('✅ Collection created:', collection.name);

        // Create attributes for the collection
        console.log('🏗️ Creating collection attributes...');

        // Name attribute
        await databases.createStringAttribute(
            'ritam-bharat-db',
            'contacts',
            'name',
            255,
            true // required
        );
        console.log('✅ Name attribute created');

        // Email attribute
        await databases.createEmailAttribute(
            'ritam-bharat-db',
            'contacts',
            'email',
            true // required
        );
        console.log('✅ Email attribute created');

        // Message attribute
        await databases.createStringAttribute(
            'ritam-bharat-db',
            'contacts',
            'message',
            5000,
            true // required
        );
        console.log('✅ Message attribute created');

        // Status attribute
        await databases.createEnumAttribute(
            'ritam-bharat-db',
            'contacts',
            'status',
            ['new', 'in-progress', 'resolved', 'closed'],
            false, // not required so we can set default
            'new' // default value
        );
        console.log('✅ Status attribute created');

        // Created At attribute
        await databases.createDatetimeAttribute(
            'ritam-bharat-db',
            'contacts',
            'createdAt',
            true // required
        );
        console.log('✅ CreatedAt attribute created');

        // IP Address attribute
        await databases.createStringAttribute(
            'ritam-bharat-db',
            'contacts',
            'ipAddress',
            45,
            false // not required
        );
        console.log('✅ IP Address attribute created');

        // User Agent attribute
        await databases.createStringAttribute(
            'ritam-bharat-db',
            'contacts',
            'userAgent',
            1000,
            false // not required
        );
        console.log('✅ User Agent attribute created');

        console.log('\n🎉 Setup completed successfully!');
        console.log('\n📝 Your environment variables are already set in .env.local:');
        console.log('NEXT_PUBLIC_APPWRITE_DATABASE_ID=ritam-bharat-db');
        console.log('APPWRITE_CONTACTS_COLLECTION_ID=contacts');
        console.log('\n✨ You can now test your contact form!');

    } catch (error) {
        console.error('❌ Error setting up Appwrite:', error.message);
        
        if (error.code === 409) {
            console.log('ℹ️ Database or collection might already exist. Check your Appwrite console.');
        }
        
        process.exit(1);
    }
}

// Run the setup
setupAppwrite();
