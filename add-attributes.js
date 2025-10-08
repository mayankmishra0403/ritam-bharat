// Add missing attributes to existing collection
const { Client, Databases } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68e642d0002726945940')
    .setKey('standard_8e6b01412f81aa800a6125ea01c3de8ce10ae648d835d10d4f29982949dba61bbf4f76755e10a1df73f1884d0ab259bf76f9eb931d783782dde7741f402569a5480763d6977a44e34e60c6c385aacfad560189500af55265cf5d084457e9ce5aabc340554982ebfde158a46bdcbdbe78a5b34085fda411443625bdc5068dd807');

const databases = new Databases(client);

async function addMissingAttributes() {
    try {
        console.log('🔧 Adding missing attributes to contacts collection...');

        // Status attribute
        try {
            await databases.createEnumAttribute(
                'ritam-bharat-db',
                'contacts',
                'status',
                ['new', 'in-progress', 'resolved', 'closed'],
                false, // not required so we can set default
                'new' // default value
            );
            console.log('✅ Status attribute created');
        } catch (error) {
            if (error.code === 409) {
                console.log('ℹ️ Status attribute already exists');
            } else {
                throw error;
            }
        }

        // Created At attribute
        try {
            await databases.createDatetimeAttribute(
                'ritam-bharat-db',
                'contacts',
                'createdAt',
                true // required
            );
            console.log('✅ CreatedAt attribute created');
        } catch (error) {
            if (error.code === 409) {
                console.log('ℹ️ CreatedAt attribute already exists');
            } else {
                throw error;
            }
        }

        // IP Address attribute
        try {
            await databases.createStringAttribute(
                'ritam-bharat-db',
                'contacts',
                'ipAddress',
                45,
                false // not required
            );
            console.log('✅ IP Address attribute created');
        } catch (error) {
            if (error.code === 409) {
                console.log('ℹ️ IP Address attribute already exists');
            } else {
                throw error;
            }
        }

        // User Agent attribute
        try {
            await databases.createStringAttribute(
                'ritam-bharat-db',
                'contacts',
                'userAgent',
                1000,
                false // not required
            );
            console.log('✅ User Agent attribute created');
        } catch (error) {
            if (error.code === 409) {
                console.log('ℹ️ User Agent attribute already exists');
            } else {
                throw error;
            }
        }

        console.log('\n🎉 All attributes are now configured!');
        console.log('\n📝 Your environment variables in .env.local:');
        console.log('NEXT_PUBLIC_APPWRITE_DATABASE_ID=ritam-bharat-db');
        console.log('APPWRITE_CONTACTS_COLLECTION_ID=contacts');
        console.log('\n✨ You can now test your contact form!');

    } catch (error) {
        console.error('❌ Error adding attributes:', error.message);
        process.exit(1);
    }
}

addMissingAttributes();
