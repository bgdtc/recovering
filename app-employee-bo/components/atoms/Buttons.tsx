import { TouchableOpacity,Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "../../constants/Styles";

export const SubmitButton = ({onPress, title}:any) => (
    <TouchableOpacity onPress={onPress} style={styles.submitButton}>
        <FontAwesome size={20} style={styles.submitButtonTextFA} name='lock'>
            <Text style={styles.submitButtonText}>{title}</Text>
        </FontAwesome>
    </TouchableOpacity>
);

export const DownloadButton = ({onPress, title, disabled}:any) => (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.downloadButton}>
        <FontAwesome size={20} style={disabled ? styles.downloadButtonTextFA_disabled : styles.downloadButtonTextFA } name={"file-pdf-o"}>
            <Text style={disabled ? styles.downloadButtonText_disabled : styles.downloadButtonText }>{disabled ? "indisponible" : title}</Text>
        </FontAwesome>
    </TouchableOpacity>
);

export const CreateCRAButton = ({onPress, title, disabled}:any) => (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.createCRAButton}>
        <FontAwesome size={20} style={disabled ? styles.createCRAButtonTextFA_disabled : styles.createCRAButtonTextFA } name={"plus"}>
            <Text style={disabled ? styles.createCRAButtonText_disabled : styles.createCRAButtonText }>{disabled ? "indisponible" : title}</Text>
        </FontAwesome>
    </TouchableOpacity>
);

export const ShowExpensesButton = ({onPress, title, disabled}:any) => (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.createCRAButton}>
        <FontAwesome size={20} style={disabled ? styles.createCRAButtonTextFA_disabled : styles.createCRAButtonTextFA } name={"eye"}>
            <Text style={disabled ? styles.createCRAButtonText_disabled : styles.createCRAButtonText }>{disabled ? "indisponible" : title}</Text>
        </FontAwesome>
    </TouchableOpacity>
);

export const CloseModalButton = ({onPress, title, disabled}:any) => (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.createCRAButton}>
        <FontAwesome size={20} style={disabled ? styles.createCRAButtonTextFA_disabled : styles.createCRAButtonTextFA } name={"close"}>
            <Text style={disabled ? styles.createCRAButtonText_disabled : styles.createCRAButtonText }>{disabled ? "indisponible" : title}</Text>
        </FontAwesome>
    </TouchableOpacity>
);

export const ValidateCRAButton = ({onPress, title, disabled}:any) => (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.validateCRAButton}>
        <FontAwesome size={20} style={disabled ? styles.createCRAButtonTextFA_disabled : styles.validateCRAButtonTextFA } name={"plus"}>
            <Text style={disabled ? styles.createCRAButtonText_disabled : styles.validateCRAButtonText }>{disabled ? "indisponible" : title}</Text>
        </FontAwesome>
    </TouchableOpacity>
);

export const YearButton = ({onPress,title,active}:any) => (
    <TouchableOpacity  onPress={onPress} style={ active ? styles.yearButtonActive : styles.yearButton}>
        <FontAwesome size={20} style={active ? styles.yearButtonTextFAActive : styles.yearButtonTextFA } name={"clock-o"}>
            <Text style={active ? styles.yearButtonTextActive : styles.yearButtonText }>{title}</Text>
        </FontAwesome>
    </TouchableOpacity>
);