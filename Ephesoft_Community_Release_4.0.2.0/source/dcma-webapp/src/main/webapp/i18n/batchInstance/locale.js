﻿/**
 * ******************************* Default locale
 * **************************************************
 */
var batchInstanceConstants = {

	download_log_file : "Download batch instance logs",
	navigate_to_batch_detail_screen : "Navigate To Batch Detail Screen",
	restart_batch : "Restart Batch(s)",
	delete_selected_batch : "Delete Selected Batch(es)",
	error_cause : "Error Cause: ",
	unc_folder_path : "UNC Folder Path: ",
	current_status : "Current Status: ",
	batch_priority : "Batch Priority: ",
	batch_name : "Batch Name: ",
	batch_description : "Batch Description: ",
	batch_identifier : "Batch Identifier: ",
	batch_class_name_label : "Batch Class Name: ",
	batch_detail_failure : "Batch Detail Failure",
	warning_title : "Warning",
	bim_stack_chart_time : "Time in hours",
	bim_stack_chart_no_of_batches : "No of batches",
	details_grid_batch_id_title : "Batch Identifier: ",
	details_grid_batch_state_title : "Current Status: ",
	details_grid_batch_class_name_title : "Batch Class Name: ",
	details_grid_batch_unc_path_title : "UNC Folder Path: ",
	details_grid_batch_priority_title : "Batch Priority: ",
	details_grid_batch_name_title : "Batch Name: ",
	details_grid_batch_error_cause_title : "Error Cause: ",
	no_plugins_for_execution : "No plugins for execution.",
	currently_executing_plugins : "Currently Executing Plugin : ",
	executed_plugins : "Executed Plugin List: ",
	pending_execution_plugins : "Pending execution: ",
	troubleshoot_header : "Troubleshoot",
	batch_instance_categories_header : "Batch Instance Categories",
	review_validation_backlog_header : "Review Validation Backlog",
	open_menu_item_title : "Open",
	unlock_menu_item_title : "Unlock",
	delete_menu_item_title : "Delete",
	restart_menu_item_title : "Restart",
	restart_at_current_module_menu_item_title : "Restart At Current Module",
	restart_at_previous_module_menu_item_title : "Restart At Previous Module",
	restart_at_first_module_menu_item_title : "Restart At First Module",
	restart_at_selected_module_menu_item_title : "Restart At Selected Module",
	batch_instance_bottom_panel_header : "Batch Execution Details",
	troubleshoot_download_label : "Download",
	troubleshoot_download_to_label : "Download To",
	troubleshoot_upload_to_label : "Upload",
	troubleshoot_select_all_title : "Select All",
	troubleshoot_path_title : "Path",
	troubleshoot_username_title : "Username",
	troubleshoot_password_title : "Password",
	troubleshoot_server_url_title : "Server URL",
	troubleshoot_ticket_id_title : "Ticket ID",
	troubleshoot_artifact_batch_class : "Batch Class",
	troubleshoot_artifact_application : "Application",
	troubleshoot_artifact_logs : "Logs",
	troubleshoot_artifact_default_batch_class : "Default Exported Batch Class",
	troubleshoot_artifact_image_classification : "With Image Classification Sample",
	troubleshoot_artifact_lucene_classification : "With Lucene Classification Sample",
	troubleshoot_artifact_lib : "Lib",
	troubleshoot_artifact_meta_inf : "Meta Inf",
	troubleshoot_artifact_application_folder : "Application Folder",
	troubleshoot_artifact_application_logs : "Application Logs",
	troubleshoot_artifact_java_appserver_logs : "JavaAppServer Logs",
	troubleshoot_artifact_batch_instance_logs : "Batch Instance Logs",
	troubleshoot_artifact_batch_instance_folder : "Batch Instance Folder",
	troubleshoot_artifact_database_dump : "Database Dump",
	troubleshoot_artifact_unc_folder : "UNC Folder",
	troubleshoot_artifact_license_details : "License Details",
	restart_batches : "Restart Batch(es)"
	
};
var batchInstanceMessages = {

	batch_is_locked : "Batch is locked by a user for editing. Unable to perform the operation.",
	message_navigate_to_batch_detail_screen : "Press OK button to navigate to Batch Detail screen.",
	batch_unlocked_successfully : "Batch(es) unlocked successfully.",
	batch_unlocked_failed : "Batch(es) could not be unlocked successfully.",
	restart_batch_from_first_module : "Do you want to restart the batch(s) from first module?",
	restart_batch_from_previous_module : "Do you want to restart the batch(s) from previous module?",
	restart_the_batch_from_module : "Do you want to restart the batch(s) from ",
	restart_batch_from_current_module : "Do you want to restart the batch(s) from current module?",
	delete_the_selected_batch_instance_message : "Are you sure you want to delete the selected batch instance(s)?",
	failed_details_of_batch_instance_identifier : "Failed to get details of selected batch instance identifier.",
	some_batch_unlocked_failed : "Some Batch(es) could not be unlocked successfully.",
	select_batches_for_restarting : "No batches have been selected, kindly select batches for restarting.",
	selected_batches_restarted_successfully_from_current_module : "Selected batches have been restarted successfully from current module.",
	some_batches_restarted_successfully_from_current_module : "Some batches among the selected batches have been restarted successfully from current module.",
	selected_batches_restarted_successfully_from_module : "Selected batches have been restarted successfully.",
	some_batches_restarted_successfully_from_module : "Some batches among the selected batches have been restarted successfully.",
	selected_batches_restarted_successfully_from_previous_module : "Selected batches have been restarted successfully from previous module.",
	some_batches_restarted_successfully_from_previous_module : "Some batches among the selected batches have been restarted successfully from previous module.",
	selected_batches_restarted_successfully_from_first_module : "Selected batches have been restarted successfully from first module.",
	some_batches_restarted_successfully_from_first_module : "Some batches among the selected batches have been restarted successfully from first module.",
	selected_batch_could_not_be_restarted : "Selected batch(s) could not be restarted.",
	selected_batches_deleted_successfully : "Selected batches have been deleted successfully.",
	some_batches_deleted_successfully : "Some batches among the selected batches have been deleted successfully.",
	batch_instance_priority_update_failed : "Batch instance priority update failed.",
	updation_failed : "Updation Failed",
	no_record_selected_to_unlock : "Please select batches to Unlock.",
	no_record_selected_to_open : "No records selected to Open.",
	selected_only_one_row_to_open : "Select only one row to Open at a time.",
	unable_to_fetch_batch_instance_logging_switch : "Unable to fetch batch instance logging switch.",
	no_error_log_found : "No error logs found.",
	select_batch_to_delete : "Please select batch(es) to delete.",
	connot_delete_batch_with_id : "Cannot delete batch(es) with identifier : ",
	batches_not_in_deletable_state : ". Batch(es) are not in deletable state.",
	connot_restart_batch_with_id : "Cannot restart batch(es) with identifier : ",
	batches_not_in_restartable_state : ". Batch(es) are either locked or are not in restartable state.",
	batch_is_not_ready_for_review_validation : "Status of batch is neither Ready for Review nor Ready for Validation.",
	delete_selected_batches : "Are you sure you want to delete this record?",
	batch_deleted_successfully : "Batch(es) deleted successfully.",
	batch_could_not_be_deleted : "Batch(es) could not be deleted.",
	msg_restart_failure : "restart_failure",
	batch_cannot_be_restarted : "Batch cannot be restarted.",
	batch_sent_for_restart : " sent for restarting and will be restarted shortly.",
	no_artifacts_selected_for_troubleshooting : "Please select at least one option for troubleshooting.",
	no_batch_selected_for_troubleshooting : "Please select a batch for troubleshooting.",
	no_network_path_entered_for_troubleshooting : "Please enter the network path where artifacts need to download.",
	path_entered_without_slash_error_message : "Invalid network path defined. Please enter network path beginning with \\\\",
	username_not_defined : "Please enter username for the server.",
	password_not_defined : "Please enter the password for the server.",
	server_not_defined : "Please enter address of the server.",
	ticket_id_not_defined : "Please enter ticket id for the artifacts.",
	log_file_download_error_message : "Unable to download batch instance logs.",
	operation_failed_batch_is_locked_by_user : "Batch is locked by a user for editing. Unable to perform the operation.",
	invalid_credentials_for_troubleshoot_upload : "Could not connect to the FTP client. Please enter valid credentials",
	error_occured_in_getting_log_message : "Unable to find logs on the server. Either switch is OFF or logs are not generated."
};
/** ************************** Turkish locale (suffix: _tr)****************** */
var batchInstanceConstants_tr = {
		
		download_log_file : "İndir toplu örneği günlükleri",
		navigate_to_batch_detail_screen : "Toplu Detay Ekranı için gidin",
		restart_batch : "Yeniden Toplu (ler)",
		delete_selected_batch : "Seçili Toplu Sil (es)",
		error_cause : "Hata Nedeni: ",
		unc_folder_path : "UNC Klasör Yolu: ",
		current_status : "Şu an ki Durum: ",
		batch_priority : "Toplu Öncelik: ",
		batch_name : "Toplu Adı: ",
		batch_description : "Toplu Açıklama: ",
		batch_identifier : "Toplu tanıtıcı: ",
		batch_class_name_label : "Toplu Sınıf Adı: ",
		batch_detail_failure : "Toplu Detay Arızası",
		warning_title : "Uyarı",
		bim_stack_chart_time : "Geçen süre saat cinsinden",
		bim_stack_chart_no_of_batches : "Serilerin Resim",
		details_grid_batch_id_title : "Toplu tanıtıcı: ",
		details_grid_batch_state_title : "Şu an ki Durum: ",
		details_grid_batch_class_name_title : "Toplu Sınıf Adı: ",
		details_grid_batch_unc_path_title : "UNC Klasör Yolu: ",
		details_grid_batch_priority_title : "Toplu Öncelik: ",
		details_grid_batch_name_title : "Toplu Adı: ",
		details_grid_batch_error_cause_title : "Hata Nedeni: ",
		no_plugins_for_execution : "Yürütülmesi için yok eklentileri.",
		currently_executing_plugins : "Şu anda Plugin yürütülüyor: ",
		executed_plugins : "Eklenti Listesi İdam: ",
		pending_execution_plugins : "Yürütme Bekleyen: ",
		troubleshoot_header : "Giderme",
		batch_instance_categories_header : "Toplu örnek Kategoriler",
		review_validation_backlog_header : "İnceleme Doğrulama Backlog",
		open_menu_item_title : "Açık",
		unlock_menu_item_title : "Kilidini açmak",
		delete_menu_item_title : "Silmek",
		restart_menu_item_title : "Tekrar Başlat",
		restart_at_current_module_menu_item_title : "Güncel Modülü anda yeniden başlatın",
		restart_at_previous_module_menu_item_title : "Önceki Modülü anda yeniden başlatın",
		restart_at_first_module_menu_item_title : "İlk Modülü At yeniden başlatın",
		restart_at_selected_module_menu_item_title : "Seçilen Modülü anda yeniden başlatın",
		batch_instance_bottom_panel_header : "Toplu Yürütme Detayları",
		troubleshoot_download_label : "İndir",
		troubleshoot_download_to_label : "Için İndir",
		troubleshoot_upload_to_label : "Yükle",
		troubleshoot_select_all_title : "Tümünü Seç",
		troubleshoot_path_title : "Yol",
		troubleshoot_username_title : "Kullanıcı adı",
		troubleshoot_password_title : "Şifre",
		troubleshoot_server_url_title : "Sunucu URL'si",
		troubleshoot_ticket_id_title : "Bilet Kimliği",
		troubleshoot_artifact_batch_class : "Toplu Sınıf",
		troubleshoot_artifact_application : "Uygulama",
		troubleshoot_artifact_logs : "Kayıtlar",
		troubleshoot_artifact_default_batch_class : "Standart İhraç Toplu Sınıf",
		troubleshoot_artifact_image_classification : "Görüntü Sınıflandırma Numune ile",
		troubleshoot_artifact_lucene_classification : "Lucene Sınıflandırma Örneği ile",
		troubleshoot_artifact_lib : "Lib",
		troubleshoot_artifact_meta_inf : "Meta Inf",
		troubleshoot_artifact_application_folder : "Uygulama Klasör",
		troubleshoot_artifact_application_logs : "Uygulama Günlükleri",
		troubleshoot_artifact_java_appserver_logs : "JavaAppServer Günlükleri",
		troubleshoot_artifact_batch_instance_logs : "Toplu Örnek Günlükleri",
		troubleshoot_artifact_batch_instance_folder : "Toplu Örnek Klasör",
		troubleshoot_artifact_database_dump : "Veritabanı Dökümü",
		troubleshoot_artifact_unc_folder : "UNC Klasör",
		troubleshoot_artifact_license_details : "Lisans Detayları",
		restart_batches : "Yeniden Toplu(es)"

};
var batchInstanceMessages_tr = {
		batch_is_locked: "Toplu düzenleme için bir kullanıcı tarafından kilitlendi. Işlemi gerçekleştirmek için açılamıyor. ",
		message_navigate_to_batch_detail_screen: "Basın ok düğmesine Toplu Detay ekranında gezinmek için.",
		batch_unlocked_successfully: "Toplu (es) başarıyla kilidi.",
		batch_unlocked_failed: "Toplu (es) başarıyla kilidi olamazdı.",
		restart_batch_from_first_module: "İlk modülünden toplu (ler) yeniden başlatmak istiyor musunuz?",
		restart_batch_from_previous_module: "Önceki modülünden toplu (ler) yeniden başlatmak istiyor musunuz?",
		restart_the_batch_from_module: "sizden toplu (ler) yeniden başlatmak istiyor musunuz",
		restart_batch_from_current_module: "Geçerli modülünden toplu (ler) yeniden başlatmak istiyor musunuz?",
		delete_the_selected_batch_instance_message: "Eğer seçilen toplu örneğini (lar) silmek istediğinizden emin misiniz?",
		failed_details_of_batch_instance_identifier: "Seçilen toplu örneği tanımlayıcı ayrıntıları alınamadı.",
		some_batch_unlocked_failed: "Bazı Toplu (ler) başarıyla kilidi olamazdı.",
		select_batches_for_restarting: "Hiçbir partiler seçilmiştir, nazik yeniden başlatmak için toplu seçin.",
		selected_batches_restarted_successfully_from_current_module: "Seçilen partiler mevcut modül başarıyla yeniden oylandı.",
		some_batches_restarted_successfully_from_current_module: "Seçilen gruplar arasında bazı partiler mevcut modül başarıyla yeniden oylandı.",
		selected_batches_restarted_successfully_from_module: "Seçilmiş partiler başarıyla yeniden oylandı.",
		some_batches_restarted_successfully_from_module: "Seçilen gruplar arasında bazı partiler başarıyla yeniden oylandı.",
		selected_batches_restarted_successfully_from_previous_module: "Seçilmiş toplu bir önceki modül başarıyla yeniden oylandı.",
		some_batches_restarted_successfully_from_previous_module: "Seçilen gruplar arasında bazı partiler önceki modül başarıyla yeniden oylandı.",
		selected_batches_restarted_successfully_from_first_module: "Seçilmiş partiler ilk modülü başarıyla yeniden oylandı.",
		some_batches_restarted_successfully_from_first_module: "Seçilen gruplar arasında bazı partiler ilk modülü başarıyla yeniden oylandı.",
		selected_batch_could_not_be_restarted: "Seçilmiş toplu (ler) yeniden olamazdı.",
		selected_batches_deleted_successfully: "Seçilmiş partiler başarıyla silindi.",
		some_batches_deleted_successfully: "Seçilen gruplar arasında bazı partiler başarıyla silindi.",
		batch_instance_priority_update_failed: "Toplu örneği öncelikli güncelleme başarısız oldu.",
		updation_failed: "Updation Başarısız",
		no_record_selected_to_unlock: "Unlock toplu seçiniz.",
		no_record_selected_to_open: "Hiçbir kayıt açın seçilen.",
		selected_only_one_row_to_open: "Bir anda Açık tek bir satır seçin.",
		unable_to_fetch_batch_instance_logging_switch: "anahtarını günlüğü toplu örneği alınamıyor.",
		no_error_log_found: "Hiçbir hata günlükleri bulundu.",
		select_batch_to_delete: "silmek için toplu (es) seçiniz.",
		connot_delete_batch_with_id: "tanımlayıcı ile toplu (es) silinemiyor:",
		batches_not_in_deletable_state: ". Toplu (es) silinemeyen durumda değil. ",
		connot_restart_batch_with_id: "tanımlayıcı ile toplu (es) yeniden Can not:",
		batches_not_in_restartable_state: "Toplu (ler) ya kilitli veya yeniden başlatılabilir durumda değillerdir. ",
		batch_is_not_ready_for_review_validation: "toplu Durumu ne Şu de hazır Doğrulama için hazır olduğunu.",
		delete_selected_batches: "Eğer bu kaydı silmek istediğinizden emin misiniz?",
		batch_deleted_successfully: "Toplu (es) başarıyla silindi.",
		batch_could_not_be_deleted: "Toplu (es) silinemedi.",
		msg_restart_failure: "restart_failure",
		batch_cannot_be_restarted: "Toplu yeniden olamaz.",
		batch_sent_for_restart: "yeniden başlatmak için gönderilen ve kısa bir süre yeniden başlatılır.",
		no_artifacts_selected_for_troubleshooting: "Sorun giderme için en az bir seçeneği seçin.",
		no_batch_selected_for_troubleshooting: "Sorun giderme için bir toplu seçiniz.",
		no_network_path_entered_for_troubleshooting: "indirmek için eserler gereken ağ yolunu giriniz.",
		path_entered_without_slash_error_message: "Geçersiz ağ yolu tanımlanmış. \\\\ Ile başlayan ağ yolunu girin",
		username_not_defined: ". sunucusu için kullanıcı adı giriniz",
		password_not_defined: "sunucusu için şifrenizi giriniz.",
		server_not_defined: "sunucunun adresini girin.",
		ticket_id_not_defined: "eserler için bilet numaranızı giriniz.",
		log_file_download_error_message: "Toplu örneği günlükleri karşıdan yüklenemiyor.",
		operation_failed_batch_is_locked_by_user: "Toplu düzenleme için bir kullanıcı tarafından kilitlendi. Işlemi gerçekleştirmek için açılamıyor. ",
		invalid_credentials_for_troubleshoot_upload: "FTP istemcisi bağlantı kurulamadı. Geçerli kimlik giriniz",
		error_occured_in_getting_log_message : "Sunucuda günlükleri bulunamıyor . Ya anahtarı KAPALI veya günlükleri genrated oluşturulan."
};

/**
 * ******************************* French language
 * ******************************* GrÃ©gory CARLIN, INEAT Conseil (Ephesoft
 * french partner) ******************************* v1.0
 * **************************************************
 */
var batchInstanceConstants_fr = {
		download_log_file : "Télécharger instance de lot journaux",
		navigate_to_batch_detail_screen : "Accédez à l'écran de Détail du lot",
		restart_batch : "Batch redémarrage (s)",
		delete_selected_batch : "Supprimer lot sélectionné (s)",
		error_cause : "Erreur Cause: ",
		unc_folder_path : "UNC Chemin du dossier: ",
		current_status : "Statut actuel: ",
		batch_priority : "Batch Priorité: ",
		batch_name : "Nom du lot: ",
		batch_description : "Batch Description: ",
		batch_identifier : "Batch Identifier: ",
		batch_class_name_label : "Batch Nom de la classe: ",
		batch_detail_failure : "Batch Détail non",
		warning_title : "Avertissement",
		bim_stack_chart_time : "Temps en heures",
		bim_stack_chart_no_of_batches : "Aucune de lots",
		details_grid_batch_id_title : "Batch Identifier: ",
		details_grid_batch_state_title : "Statut actuel: ",
		details_grid_batch_class_name_title : "Batch Nom de la classe: ",
		details_grid_batch_unc_path_title : "UNC Chemin du dossier: ",
		details_grid_batch_priority_title : "Batch Priorité: ",
		details_grid_batch_name_title : "Nom du lot: ",
		details_grid_batch_error_cause_title : "Erreur Cause: ",
		no_plugins_for_execution : "Aucun plugin pour l'exécution.",
		currently_executing_plugins : "Plugin en cours d'exécution: ",
		executed_plugins : "Exécuté Liste Plugin: ",
		pending_execution_plugins : "Dans l'attente de l'exécution: ",
		troubleshoot_header : "Dépanner",
		batch_instance_categories_header : "Batch instance Catégories",
		review_validation_backlog_header : "Revue de validation Backlog",
		open_menu_item_title : "Ouvert",
		unlock_menu_item_title : "Ouvrir",
		delete_menu_item_title : "Effacer",
		restart_menu_item_title : "Redémarrage",
		restart_at_current_module_menu_item_title : "Au redémarrage module courant",
		restart_at_previous_module_menu_item_title : "Au redémarrage module précédent",
		restart_at_first_module_menu_item_title : "Redémarrez Au premier module",
		restart_at_selected_module_menu_item_title : "Redémarrez A Module Sélectionné",
		batch_instance_bottom_panel_header : "Batch Execution Détails",
		troubleshoot_download_label : "Télécharger",
		troubleshoot_download_to_label : "Télécharger Pour",
		troubleshoot_upload_to_label : "Télécharger",
		troubleshoot_select_all_title : "Sélectionner tout",
		troubleshoot_path_title : "Chemin",
		troubleshoot_username_title : "Nom d'utilisateur",
		troubleshoot_password_title : "Mot de passe",
		troubleshoot_server_url_title : "URL du serveur",
		troubleshoot_ticket_id_title : "ID de billets",
		troubleshoot_artifact_batch_class : "Batch classe",
		troubleshoot_artifact_application : "Application",
		troubleshoot_artifact_logs : "Logs",
		troubleshoot_artifact_default_batch_class : "Par défaut exportés lot classe",
		troubleshoot_artifact_image_classification : "Avec Classification des images échantillon",
		troubleshoot_artifact_lucene_classification : "Avec Lucene Classification échantillon",
		troubleshoot_artifact_lib : "Lib",
		troubleshoot_artifact_meta_inf : "Meta Inf",
		troubleshoot_artifact_application_folder : "Dossier d'application",
		troubleshoot_artifact_application_logs : "Journaux de l'application",
		troubleshoot_artifact_java_appserver_logs : "JavaAppServer Logs",
		troubleshoot_artifact_batch_instance_logs : "Batch instance Logs",
		troubleshoot_artifact_batch_instance_folder : "Batch instance dossier",
		troubleshoot_artifact_database_dump : "Base de données Dump",
		troubleshoot_artifact_unc_folder : "UNC dossier",
		troubleshoot_artifact_license_details : "Détails sur la licence",
		restart_batches : "Batch redémarrage(es)"
};
var batchInstanceMessages_fr = {
		batch_is_locked: "Batch est verrouillé par un utilisateur pour l'édition. Impossible d'effectuer l'opération. ",
		message_navigate_to_batch_detail_screen: "Appuyez sur le bouton OK pour accéder à l'écran Batch Détail.",
		batch_unlocked_successfully: "Lot (s) déverrouillé avec succès.",
		batch_unlocked_failed: "Batch (s) ne peut être déverrouillé avec succès.",
		restart_batch_from_first_module: "Voulez-vous redémarrer le lot (s) du premier module?",
		restart_batch_from_previous_module: "Voulez-vous redémarrer le lot (s) du module précédent?",
		restart_the_batch_from_module: "Voulez-vous redémarrer le lot (s) de",
		restart_batch_from_current_module: "Voulez-vous redémarrer le lot (s) à partir du module actuel?",
		delete_the_selected_batch_instance_message: "Etes-vous sûr que vous voulez supprimer l'instance de lot sélectionné (s)?",
		failed_details_of_batch_instance_identifier: "Impossible d'obtenir des détails sur sélectionné identificateur d'instance de lot.",
		some_batch_unlocked_failed: "Certains lots (es) ne peut être déverrouillé avec succès.",
		select_batches_for_restarting: "Pas de lots ont été sélectionnés, sélectionnez aimablement lots pour redémarrer.",
		selected_batches_restarted_successfully_from_current_module: "Selected lots ont été renouvelées avec succès du module courant.",
		some_batches_restarted_successfully_from_current_module: "Certains lots parmi les lots sélectionnés ont été renouvelées avec succès du module courant.",
		selected_batches_restarted_successfully_from_module: "Selected lots ont été renouvelées avec succès.",
		some_batches_restarted_successfully_from_module: "Certains lots parmi les lots sélectionnés ont été renouvelées avec succès.",
		selected_batches_restarted_successfully_from_previous_module: "Selected lots ont été renouvelées avec succès du module précédent.",
		some_batches_restarted_successfully_from_previous_module: "Certains lots parmi les lots sélectionnés ont été renouvelées avec succès du module précédent.",
		selected_batches_restarted_successfully_from_first_module: "Selected lots ont été renouvelées avec succès du premier module.",
		some_batches_restarted_successfully_from_first_module: "Certains lots parmi les lots sélectionnés ont été renouvelées avec succès du premier module.",
		selected_batch_could_not_be_restarted: "lot (s) sélectionné ne pouvait pas être redémarré.",
		selected_batches_deleted_successfully: "lots sélectionnés ont été supprimées avec succès.",
		some_batches_deleted_successfully: "Certains lots parmi les lots sélectionnés ont été supprimés avec succès.",
		batch_instance_priority_update_failed: "Batch mise à jour prioritaire de l'instance a échoué.",
		updation_failed: "Updation échoué",
		no_record_selected_to_unlock: "Se il vous plaît sélectionnez lots pour déverrouiller.",
		no_record_selected_to_open: "No records sélectionné pour ouvrir.",
		selected_only_one_row_to_open: "Sélectionner uniquement une ligne ouverte à la fois.",
		unable_to_fetch_batch_instance_logging_switch: "Impossible de récupérer instance de lot connecter commutateur.",
		no_error_log_found: "Pas de journaux d'erreurs trouvées.",
		select_batch_to_delete: "Se il vous plaît sélectionnez lot (s) à supprimer.",
		connot_delete_batch_with_id: "Vous ne pouvez pas supprimer lot (s) avec l'identifiant:",
		batches_not_in_deletable_state: ". Lot (s) ne sont pas en état supprimable. ",
		connot_restart_batch_with_id: "Vous ne pouvez pas redémarrer lot (s) avec l'identifiant:",
		batches_not_in_restartable_state: ". Lot (s) sont soit verrouillé ou ne sont pas en état redémarrable. ",
		batch_is_not_ready_for_review_validation: "Etat des lots ne est ni Ready for Review, ni Prêt pour la validation.",
		delete_selected_batches: "Êtes-vous sûr de vouloir supprimer cet enregistrement?",
		batch_deleted_successfully: "Lot (s) supprimé avec succès.",
		batch_could_not_be_deleted: "Lot (s) n'a pas pu être supprimé.",
		msg_restart_failure: "restart_failure",
		batch_cannot_be_restarted: "Lot ne peut pas être redémarré.",
		batch_sent_for_restart: "envoyé pour redémarrer et sera redémarré sous peu.",
		no_artifacts_selected_for_troubleshooting: "Se il vous plaît sélectionner au moins une option pour le dépannage.",
		no_batch_selected_for_troubleshooting: "Se il vous plaît sélectionner un lot pour le dépannage.",
		no_network_path_entered_for_troubleshooting: "Se il vous plaît entrer le chemin d'accès réseau, où des objets doivent télécharger.",
		path_entered_without_slash_error_message: "chemin de réseau non valide défini. Se il vous plaît saisissez le chemin de réseau en commençant par \\\\ ",
		username_not_defined: ". Se il vous plaît entrer nom d'utilisateur pour le serveur",
		password_not_defined: "Se il vous plaît entrez le mot de passe pour le serveur.",
		server_not_defined: "Se il vous plaît entrez l'adresse du serveur.",
		ticket_id_not_defined: "Se il vous plaît entrer billet id pour les artefacts.",
		log_file_download_error_message: "Impossible de télécharger les journaux d'instance de lot.",
		operation_failed_batch_is_locked_by_user: "Batch est verrouillé par un utilisateur pour l'édition. Impossible d'effectuer l'opération. ",
		invalid_credentials_for_troubleshoot_upload: "Impossible de se connecter au client FTP. Se il vous plaît saisir des identifiants valides ",
		error_occured_in_getting_log_message : "Impossible de trouver les journaux sur le serveur . Soit commutateur est OFF ou les journaux ne sont pas généré."
};

/**
 * ******************************* Spanish locale
 * **************************************************
 */
var batchInstanceConstants_es = {
		download_log_file : "Descargar registros de instancia por lotes",
		navigate_to_batch_detail_screen : "Navegue al detalle de la pantalla por lotes",
		restart_batch : "Reiniciar lote (s)",
		delete_selected_batch : "Eliminar lote seleccionado (s)",
		error_cause : "Error Causa: ",
		unc_folder_path : "Carpeta ruta UNC: ",
		current_status : "Estado actual: ",
		batch_priority : "Prioridad por lotes: ",
		batch_name : "Nombre de lote: ",
		batch_description : "Descripción del lote: ",
		batch_identifier : "Identificador de lote: ",
		batch_class_name_label : "Lote Nombre de clase: ",
		batch_detail_failure : "Detalle de lotes Fracaso",
		warning_title : "Advertencia",
		bim_stack_chart_time : "Tiempo en horas",
		bim_stack_chart_no_of_batches : "No de los lotes",
		details_grid_batch_id_title : "Identificador de lote: ",
		details_grid_batch_state_title : "Estado actual: ",
		details_grid_batch_class_name_title : "Lote Nombre de clase: ",
		details_grid_batch_unc_path_title : "Carpeta ruta UNC: ",
		details_grid_batch_priority_title : "Prioridad por lotes: ",
		details_grid_batch_name_title : "Nombre de lote: ",
		details_grid_batch_error_cause_title : "Error Causa: ",
		no_plugins_for_execution : "No hay plugins para su ejecución.",
		currently_executing_plugins : "Actualmente Ejecución Plugin: ",
		executed_plugins : "Ejecutado Lista Plugin: ",
		pending_execution_plugins : "A la espera de la ejecución: ",
		troubleshoot_header : "Solucionar problemas",
		batch_instance_categories_header : "Lotes de instancia Categorías",
		review_validation_backlog_header : "Examen de Validación Backlog",
		open_menu_item_title : "Abierto",
		unlock_menu_item_title : "Descubrir",
		delete_menu_item_title : "Borrar",
		restart_menu_item_title : "Reanudar",
		restart_at_current_module_menu_item_title : "Reiniciar En Módulo actual",
		restart_at_previous_module_menu_item_title : "Reiniciar En Módulo Anterior",
		restart_at_first_module_menu_item_title : "Reinicie En Primer Módulo",
		restart_at_selected_module_menu_item_title : "Reinicie Al módulo seleccionado",
		batch_instance_bottom_panel_header : "Detalles de ejecución por lotes",
		troubleshoot_download_label : "Descargar",
		troubleshoot_download_to_label : "Descargar Para",
		troubleshoot_upload_to_label : "Subir",
		troubleshoot_select_all_title : "Seleccionar todo",
		troubleshoot_path_title : "Camino",
		troubleshoot_username_title : "Nombre de usuario",
		troubleshoot_password_title : "Contraseña",
		troubleshoot_server_url_title : "URL del servidor",
		troubleshoot_ticket_id_title : "Billete ID",
		troubleshoot_artifact_batch_class : "Clase de lote",
		troubleshoot_artifact_application : "Aplicación",
		troubleshoot_artifact_logs : "Registros",
		troubleshoot_artifact_default_batch_class : "Por defecto Exportados clase de lote",
		troubleshoot_artifact_image_classification : "Con Clasificación de imagen de muestra",
		troubleshoot_artifact_lucene_classification : "Con clasificación Lucene Muestra",
		troubleshoot_artifact_lib : "Lib",
		troubleshoot_artifact_meta_inf : "Meta Inf",
		troubleshoot_artifact_application_folder : "Carpeta de la aplicación",
		troubleshoot_artifact_application_logs : "Registros de solicitud",
		troubleshoot_artifact_java_appserver_logs : "JavaAppServer Logs",
		troubleshoot_artifact_batch_instance_logs : "Instancia Registros de lotes",
		troubleshoot_artifact_batch_instance_folder : "Carpeta de instancias por lotes",
		troubleshoot_artifact_database_dump : "Volcado de base de datos",
		troubleshoot_artifact_unc_folder : "UNC Carpeta",
		troubleshoot_artifact_license_details : "Detalles de la Licencia",
		restart_batches : "Lote Restart(es)"
};
var batchInstanceMessages_es = {

		batch_is_locked: "Lote está bloqueado por un usuario para su edición. No se puede realizar la operación. ",
		message_navigate_to_batch_detail_screen: "Presione el botón Aceptar para navegar a la pantalla Detalle de lotes.",
		batch_unlocked_successfully: "Lote (es) desbloqueado con éxito.",
		batch_unlocked_failed: "Lote (es) no podía ser desbloqueado con éxito.",
		restart_batch_from_first_module: "¿Desea reiniciar el lote (s) de primer módulo?",
		restart_batch_from_previous_module: "¿Desea reiniciar el lote (s) desde el módulo anterior?",
		restart_the_batch_from_module: "¿Desea reiniciar el lote (s)",
		restart_batch_from_current_module: "¿Desea reiniciar el lote (s) desde el módulo actual?",
		delete_the_selected_batch_instance_message: "¿Seguro que quieres eliminar la instancia lote seleccionado (s)?",
		failed_details_of_batch_instance_identifier: "No se pudo obtener detalles de identificador de instancia lote seleccionado.",
		some_batch_unlocked_failed: "Algunos lotes (es) no podía ser desbloqueado con éxito.",
		select_batches_for_restarting: "No hay lotes se han seleccionado, seleccione amablemente lotes para reiniciar.",
		selected_batches_restarted_successfully_from_current_module: "Seleccionado lotes se han reiniciado con éxito del módulo actual.",
		some_batches_restarted_successfully_from_current_module: "Algunos lotes entre los lotes seleccionados se han reiniciado con éxito del módulo actual.",
		selected_batches_restarted_successfully_from_module: "Seleccionado lotes se han reiniciado con éxito.",
		some_batches_restarted_successfully_from_module: "Algunos lotes entre los lotes seleccionados se han reiniciado con éxito.",
		selected_batches_restarted_successfully_from_previous_module: "Seleccionado lotes se han reiniciado con éxito del módulo anterior.",
		some_batches_restarted_successfully_from_previous_module: "Algunos lotes entre los lotes seleccionados se han reiniciado con éxito del módulo anterior.",
		selected_batches_restarted_successfully_from_first_module: "Seleccionado lotes se han reiniciado con éxito del primer módulo.",
		some_batches_restarted_successfully_from_first_module: "Algunos lotes entre los lotes seleccionados se han reiniciado con éxito del primer módulo.",
		selected_batch_could_not_be_restarted: "lote (s) seleccionada podría no ser reiniciado.",
		selected_batches_deleted_successfully: "lotes seleccionados se han eliminado correctamente.",
		some_batches_deleted_successfully: "Algunos lotes entre los lotes seleccionados se han eliminado correctamente.",
		batch_instance_priority_update_failed: "actualización instancia prioridad lotes falló.",
		updation_failed: "Updation Failed",
		no_record_selected_to_unlock: "Por favor, seleccione lotes para desbloquear.",
		no_record_selected_to_open: "No hay registros seleccionados a Open.",
		selected_only_one_row_to_open: "Selecciona sólo una fila para abrir a la vez.",
		unable_to_fetch_batch_instance_logging_switch: "No se ha podido recuperar la instancia lote interruptor de registro.",
		no_error_log_found: "No se han encontrado registros de errores.",
		select_batch_to_delete: "Por favor, seleccione lote (s) que desea eliminar.",
		connot_delete_batch_with_id: "No se puede eliminar por lotes (es) con el identificador:",
		batches_not_in_deletable_state: ". Lote (es) no están en estado deletable. ",
		connot_restart_batch_with_id: "No se puede reiniciar lote (s) con el identificador:",
		batches_not_in_restartable_state: ". Lote (es) se bloqueado o no se encuentran en estado reiniciable. ",
		batch_is_not_ready_for_review_validation: "Situación de lote no es ni lista para su revisión ni listo para la validación.",
		delete_selected_batches: "¿Está seguro que desea eliminar este registro?",
		batch_deleted_successfully: "Lote (es) ha eliminado correctamente.",
		batch_could_not_be_deleted: "Lote (es) podría no ser eliminado.",
		msg_restart_failure: "restart_failure",
		batch_cannot_be_restarted: "Lote no puede ser reiniciado.",
		batch_sent_for_restart: "enviado para volver a arrancar y se reiniciará en breve.",
		no_artifacts_selected_for_troubleshooting: "Por favor, seleccione al menos una opción para la solución de problemas.",
		no_batch_selected_for_troubleshooting: "Por favor, seleccione un lote para la solución de problemas.",
		no_network_path_entered_for_troubleshooting: "Por favor, introduzca la ruta de la red donde los artefactos tienen que descargar.",
		path_entered_without_slash_error_message: "ruta de red no válido definido. Por favor, introduzca la ruta de red que comienza con \\\\ ",
		username_not_defined: ". Por favor introduzca nombre de usuario para el servidor",
		password_not_defined: "Por favor, introduzca la contraseña para el servidor.",
		server_not_defined: "Por favor, introduzca la dirección del servidor.",
		ticket_id_not_defined: "Por favor ingrese Identificación del billete para los artefactos.",
		log_file_download_error_message: "No se puede descargar registros de instancia de proceso por lotes.",
		operation_failed_batch_is_locked_by_user: "Lote está bloqueado por un usuario para su edición. No se puede realizar la operación. ",
		invalid_credentials_for_troubleshoot_upload: "No se pudo conectar con el cliente FTP. Por favor, introduzca las credenciales válidas ",
		error_occured_in_getting_log_message : "Incapaz de encontrar registros en el servidor. De cualquier interruptor está apagado o registros no están generado."
};