import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0042C0'
    },
    incident: {
        marginTop: 30,
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        shadowOffset:{ width: 5,  height: 5 },
        shadowOpacity: 0.3,
        shadowColor: '#667788'
    }, 
    incidentProperty: {
        fontSize: 14,
        color: '#17222D',
        fontWeight: 'bold'
    },

    incidentValue: {
        marginTop: 8, 
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },
    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor:'#fff',
        marginBottom: 16,
        shadowOffset:{ width: 5,  height: 5 },
        shadowOpacity: 0.3,
        shadowColor: '#667788'
    },
    helpTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#17222D',
        lineHeight: 30
    },
    helpDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16
    },
    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    action: {
        backgroundColor: '#0042C0',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    }
})