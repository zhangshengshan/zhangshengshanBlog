INSERT OVERWRITE TABLE ea_dg.rpt_datagov_hive_manta_coreconfig_matrix_da PARTITION ( date = '20230531' )
SELECT '4852', 'EA', '4843'  , '一级监控', NULL , '表分区无数据' ,'4843'/'4852', '整体' , NULL
UNION ALL 
SELECT '2905', 'EA', '2836'  , '二级监控', NULL , '枚举值异常'   ,'2836'/'2905', '整体' , NULL
UNION ALL 
SELECT '2846', 'EA', '2344'  , '三级监控', NULL , '指标波动'     ,'2344'/'2846', '整体' , NULL

