// Add phone attribute to existing contacts collection
const { Client, Databases } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68e642d0002726945940')
    .setKey('standard_8e6b01412f81aa800a6125ea01c3de8ce10ae648d835d10d4f29982949dba61bbf4f76755e10a1df73f1884d0ab259bf76f9eb931d783782dde7741f402569a5480763d6977a44e34e60c6c385aacfad560189500af55265cf5d084457e9ce5aabc340554982ebfde158a46bdcbdbe78a5b34085fda411443625bdc5068dd807');

const databases = new Databases(client);

async function addPhoneAttribute() {
    try {
        console.log('📞 Adding phone attribute to contacts collection...');

        // Phone attribute
        await databases.createStringAttribute(
            'ritam-bharat-db',
            'contacts',
            'phone',
            20,
            true // required
        );
        console.log('✅ Phone attribute created');

        console.log('\n🎉 Phone field added successfully!');
        console.log('✨ Your contact form now collects phone numbers too!');

    } catch (error) {
        if (error.code === 409) {
            console.log('ℹ️ Phone attribute already exists');
        } else {
            console.error('❌ Error adding phone attribute:', error.message);
            process.exit(1);
        }
    }
}

addPhoneAttribute();
