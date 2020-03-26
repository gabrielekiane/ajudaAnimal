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
    headerText: {
        fontSize: 15,
        color: '#737380'
    },
    titleName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0042C0'
    },
    title: {
        fontSize: 25,
        marginBottom: 16,
        marginTop: 48,
        color: '#17222D'
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
    },
    incidentList: {
        marginTop: 32
    },
    incident: {
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
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailsButtonText: {
        fontSize: 15,
        color: '#0042C0',
        fontWeight: 'bold'
    }
})