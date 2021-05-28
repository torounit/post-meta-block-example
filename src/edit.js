import {
	RichText,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { TextControl, PanelBody } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { useEffect } from '@wordpress/element';


const metaKey = 'my_post_meta';

function Edit( { setAttributes, attributes } ) {
	const blockProps = useBlockProps();
	const postType = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPostType(),
		[]
	);
	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

	const updateMetaValue = ( newValue ) => {
		setMeta( { ...meta, [ metaKey ]: newValue } );
	};

	useEffect( () => {
		return () => {
			updateMetaValue( '' );
		};
	}, [] );

	const inspectorControls = (
		<InspectorControls>
			<PanelBody title={ 'Post meta setting' }>
				<TextControl
					value={ meta[ metaKey ] }
					label={ 'value' }
					onChange={ updateMetaValue }
				/>
			</PanelBody>
		</InspectorControls>
	);

	return (
		<>
			{ inspectorControls }
			<div { ...blockProps }>
				<TextControl
					placeholder={ 'Add value...' }
					value={ meta[ metaKey ] }
					onChange={ updateMetaValue }
				/>
			</div>
		</>
	);
}

export default Edit;
